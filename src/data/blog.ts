export interface BlogPost {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  content: {
    pt: string;
    en: string;
  };
  tags: string[];
  date: string;
  readingTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'arquitetura-rag-producao',
    title: {
      pt: 'Arquitetura RAG em Produção: Lições Aprendidas',
      en: 'RAG Architecture in Production: Lessons Learned'
    },
    description: {
      pt: 'Experiências práticas implementando sistemas RAG em ambientes de produção',
      en: 'Practical experiences implementing RAG systems in production environments'
    },
    content: {
      pt: `Após implementar diversos sistemas RAG em produção, compartilho as principais lições aprendidas sobre arquitetura, otimização e manutenção.

## O Problema do Chunking

O primeiro desafio em qualquer sistema RAG é definir a estratégia de chunking. Após testar várias abordagens:

1. **Chunking por caracteres**: Simples mas perde contexto
2. **Chunking semântico**: Melhor qualidade mas computacionalmente caro
3. **Híbrido**: Nossa escolha - chunks por parágrafo com overlap de 20%

## Escolha de Embeddings

Testamos diversos modelos:
- **OpenAI Ada**: Boa qualidade, custo alto
- **BGE-M3**: Melhor custo-benefício
- **Custom fine-tuning**: +15% de acurácia no domínio específico`,
      en: `After implementing several RAG systems in production, I share the main lessons learned about architecture, optimization and maintenance.

## The Chunking Problem

The first challenge in any RAG system is defining the chunking strategy. After testing various approaches:

1. **Character chunking**: Simple but loses context
2. **Semantic chunking**: Better quality but computationally expensive
3. **Hybrid**: Our choice - paragraph chunks with 20% overlap

## Embedding Choice

We tested several models:
- **OpenAI Ada**: Good quality, high cost
- **BGE-M3**: Best cost-benefit
- **Custom fine-tuning**: +15% accuracy in specific domain`
    },
    tags: ['RAG', 'LLM', 'Architecture', 'AI'],
    date: '2024-03-10',
    readingTime: 8
  },
  {
    id: 'otimizacao-llm-custos',
    title: {
      pt: 'Reduzindo Custos com LLMs em 80% Sem Perder Qualidade',
      en: 'Reducing LLM Costs by 80% Without Losing Quality'
    },
    description: {
      pt: 'Estratégias práticas para otimizar custos em aplicações LLM',
      en: 'Practical strategies to optimize costs in LLM applications'
    },
    content: {
      pt: `Trabalhar com LLMs em produção pode ser caro. Aqui estão estratégias testadas que reduziram nossos custos em 80%.

## 1. Cascade de Modelos

Implementamos um sistema em cascata que escolhe o modelo baseado na complexidade da query.

## 2. Prompt Caching

Para queries similares, implementamos semantic caching:
- Embeddings das queries
- Busca por similaridade (cosine > 0.95)
- Cache hit rate: 34% em produção`,
      en: `Working with LLMs in production can be expensive. Here are tested strategies that reduced our costs by 80%.

## 1. Model Cascade

We implemented a cascade system that chooses the model based on query complexity.

## 2. Prompt Caching

For similar queries, we implemented semantic caching:
- Query embeddings
- Similarity search (cosine > 0.95)
- Cache hit rate: 34% in production`
    },
    tags: ['LLM', 'Optimization', 'Cost Reduction', 'AI'],
    date: '2024-02-15',
    readingTime: 10
  }
];