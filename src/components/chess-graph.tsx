"use client";

import CytoscapeComponent from "react-cytoscapejs";
import type {
  ElementDefinition,
  EdgeDataDefinition,
  NodeDataDefinition,
} from "cytoscape";
import { Chess, SQUARES } from "chess.js";

type EdgeDefinition = ElementDefinition & { data: EdgeDataDefinition };
type NodeDefinition = ElementDefinition & { data: NodeDataDefinition };

export function ChessGraph({ fen }: { fen: string }) {
  const edges = getEdges(fen);
  const nodes = getNodes(edges);
  const elements = nodes.concat(edges);

  return (
    <CytoscapeComponent
      layout={{ name: "grid" }}
      elements={elements}
      className="size-full"
    />
  );
}

function getNodes(edges: EdgeDefinition[]): NodeDefinition[] {
  const seen: Record<string, boolean> = {};
  for (const {
    data: { source, target },
  } of edges) {
    seen[source] = true;
    seen[target] = true;
  }

  const nodes: NodeDefinition[] = SQUARES.map((id) => ({
    data: { id, label: id },
  }));

  return nodes;
}

function getEdges(fen: string): EdgeDefinition[] {
  const chess = new Chess(fen);
  const edges = [];
  for (const attacked of SQUARES) {
    for (const attacker of chess.attackers(attacked)) {
      edges.push({ data: { source: attacker, target: attacked } });
    }
  }

  return edges;
}
