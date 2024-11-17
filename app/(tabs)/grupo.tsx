import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../../Supabase';
import { useRouter } from 'expo-router';

interface Grupo {
    id: string;
    nome: string;
    descricao: string;
}

interface Aluno {
    id: string;
    nome: string;
    email: string;
}

interface Avaliacao {
    aluno_id: string;
    grupo_id: string;
    nota: number;
}

const ListaGrupos: React.FC = () => {
    const router = useRouter(); // Instancia o useRouter
    const [grupos, setGrupos] = useState<Grupo[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedGrupo, setSelectedGrupo] = useState<Grupo | null>(null);
    const [alunos, setAlunos] = useState<Aluno[]>([]);
    const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);

    useEffect(() => {
        const fetchGrupos = async () => {
            const { data, error } = await supabase.from<Grupo>('grupos').select('*');

            if (error) {
                console.error('Erro ao buscar grupos:', error.message);
            } else {
                setGrupos(data || []);
            }
            setLoading(false);
        };

        fetchGrupos();
    }, []);

    const handleGrupoClick = async (id: string) => {
        const { data: grupoData, error: grupoError } = await supabase
            .from<Grupo>('grupos')
            .select('*')
            .eq('id', id)
            .single();

        if (grupoError) {
            console.error('Erro ao buscar detalhes do grupo:', grupoError.message);
            Alert.alert('Erro', 'Não foi possível carregar os detalhes do grupo.');
            return;
        }

        setSelectedGrupo(grupoData);

        const { data: alunosData, error: alunosError } = await supabase
            .from<Aluno>('alunos')
            .select('id, nome, email')
            .eq('grupo_id', id);

        if (alunosError) {
            console.error('Erro ao buscar alunos:', alunosError.message);
            Alert.alert('Erro', 'Não foi possível carregar os alunos do grupo.');
        } else {
            setAlunos(alunosData || []);
        }

        // Buscar avaliações (notas) para esse grupo
        const { data: avaliacoesData, error: avaliacoesError } = await supabase
            .from<Avaliacao>('avaliacoes')
            .select('aluno_id, nota')
            .eq('grupo_id', id);

        if (avaliacoesError) {
            console.error('Erro ao buscar avaliações:', avaliacoesError.message);
        } else {
            setAvaliacoes(avaliacoesData || []);
        }
    };

    const handleCloseDetails = () => {
        setSelectedGrupo(null);
        setAlunos([]);
        setAvaliacoes([]);
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Carregando grupos...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => router.push('/home')} style={styles.backButton}>
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>

                <Text style={styles.header}>Lista de Grupos</Text>
            </View>

            <FlatList
                data={grupos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleGrupoClick(item.id)} style={styles.item}>
                        <Text style={styles.itemText}>{item.nome}</Text>
                    </TouchableOpacity>
                )}
            />
            {selectedGrupo && (
                <View style={styles.detailsContainer}>
                    <TouchableOpacity onPress={handleCloseDetails} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>
                    <Text style={styles.detailsText}>Grupo: {selectedGrupo.nome}</Text>
                    <Text style={[styles.detailsText, styles.descriptionText]}>
                        Descrição: {selectedGrupo.descricao}
                    </Text>
                    <Text style={styles.detailsText}>Alunos:</Text>
                    <FlatList
                        data={alunos}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            // Buscar a nota para o aluno
                            const avaliacao = avaliacoes.find(av => av.aluno_id === item.id);
                            return (
                                <View style={styles.alunoItem}>
                                    <Text style={styles.detailsText}>- {item.nome}</Text>
                                    <Text style={styles.detailsText}>Email: {item.email}</Text>
                                    {avaliacao ? (
                                        <Text style={styles.detailsText}>Nota: {avaliacao.nota}</Text>
                                    ) : (
                                        <Text style={styles.detailsText}>Nota: Não atribuída</Text>
                                    )}
                                </View>
                            );
                        }}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1, // Garante que o título ocupe o espaço restante
    },
    backButton: {
        padding: 10,
        backgroundColor: '#2d2563',
        borderRadius: 15,
        marginRight: 10,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    item: {
        padding: 15,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        fontSize: 18,
        textAlign: 'center',
    },
    detailsContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        position: 'relative',
        marginHorizontal: 20,  // Margem nas laterais
    },
    detailsText: {
        fontSize: 16,
        marginVertical: 5,
        textAlign: 'center', // Centraliza o texto
    },
    descriptionText: {
        marginHorizontal: 15, // Adiciona mais margem para a descrição não ficar muito colada
    },
    alunoItem: {
        marginBottom: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#C70039',
        borderRadius: 15,
        padding: 8,
        zIndex: 1,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default ListaGrupos;
