import type Categoria from "@/model/Categoria";
import type Receita from "@/model/Receita";

const API_URL = 'https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865';

const fetchApi = async (path: string) => {
    return fetch(`${API_URL}/${path}`)
        .then((response) => response.json())
}

export async function obterCategorias(): Promise<Categoria[]> {
    return fetchApi('categorias.json');
}

export async function obterReceitas(): Promise<Receita[]> {
    return fetchApi('receitas.json');
}
