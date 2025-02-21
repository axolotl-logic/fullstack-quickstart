"use client";

import CytoscapeComponent from "react-cytoscapejs";
import type {
  ElementDefinition,
  EdgeDataDefinition,
  NodeDataDefinition,
} from "cytoscape";
import { Chess, SQUARES } from "chess.js";
import { useMemo } from "react";
import cytoscape from "cytoscape";
import coseBilkent from "cytoscape-cose-bilkent";

type EdgeDefinition = ElementDefinition & { data: EdgeDataDefinition };
type NodeDefinition = ElementDefinition & { data: NodeDataDefinition };

cytoscape.use(coseBilkent);

export function ChessGraph({ fen }: { fen: string }) {
  const edges = getEdges(fen);
  const nodes = getNodes(edges);

  return (
    <CytoscapeComponent
      layout={{ name: "cose-bilkent" }}
      elements={nodes.concat(edges)}
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

  const nodes: NodeDefinition[] = [...Object.keys(seen)].map((id) => ({
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
