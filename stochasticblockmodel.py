import pandas as pd
import networkx as nx
import community
import matplotlib.pyplot as plt
import numpy as np

# Membaca data dari dataframe

df = pd.read_excel("stochasticblockmodel.xlsx")
data = pd.read_excel('stochasticblockmodel.xlsx')

# Membuat graph dari data
graph = nx.Graph()
nodes = set(df['Pelanggan'])

for node1 in nodes:
    node1_prod = df[df['Pelanggan'] == node1]['Produk'].iloc[0]
    for node2 in nodes:
        if node1 >= node2:
            continue
        node2_prod = df[df['Pelanggan'] == node2]['Produk'].iloc[0]
        if set(node1_prod.split(', ')).intersection(set(node2_prod.split(','))):
            graph.add_edge(node1, node2)

# Menganalisis graph menggunakan Stochastic Block Model
partition = community.best_partition(graph)

## Menampilkan hasil analisis
for com in set(partition.values()):   # Menampilkan hasil Community
    members = [nodes for nodes in partition.keys() if partition[nodes] == com]
    print("Community", com, members)
    
plt.figure(figsize=(10,7))  # Menampilkan hasil Grafik
pos = nx.spring_layout(graph)
cmap = plt.cm.RdYlBu
color = np.array([cmap(partition[node]/max(partition.values())) for node in graph.nodes()])
nx.draw_networkx_nodes(graph, pos, node_size=100, node_color=color)
nx.draw_networkx_edges(graph, pos, alpha=0.3)
plt.show()




