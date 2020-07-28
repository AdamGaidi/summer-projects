/* Container class for the literature review section of the website */
//TODO Get content from external source; GraphQL/database/firebase?
import React from "react";

//Stylesheet
import "./css/LiteratureReview.css";

//image
import paper from "../assets/paper.png";

export default function LiteratureReview() {
  return (
    <div className="lit">
      <h1 id="lit-h1">Literature Review</h1>
      <h2 id="lit-h2">Motivation</h2>
      <p id="lit-rev-paragraph">
        The literature review is an excellent tool when entering a new domain in
        which you're unfamiliar with the state of the art. The process requires
        a thourough review of both pivotal historical results, as well as more
        recent research. A literature review should be more than a retelling of
        the various sources, it is important that the author attempts to
        synthesize the accumulated knowledge in order to present something new,
        i.e; a new framework to analyze the field, new methods etc. I recently
        discovered the existence of hypergraphs, a generalization of the more
        well-known graph. As hypergraphs greatly intrigued me, I wrote a
        literature review as part of the process of familiarizing myself with
        them.
      </p>
      <img src={paper} alt="illustrate paper" />
      <h2 id="lit-h2">Hypergraph Algorithms</h2>
      <p id="lit-rev-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h2 id="lit-h2">Availability Status</h2>
      <p id="lit-rev-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h2 id="lit-h2">
        Techniques for Working with Large-Scale Complex Problems in a Hypergraph
        Setting
      </h2>
      <p id="lit-rev-paragraph">
        A Hypergraph is a generalization of the more well-known graph. It
        enables the modeling of group relationships by admitting hyperedges.
        While an edge in a graph represents a binary relationship by connecting
        exactly two vertices, a hyperedge is an edge that can connect an
        arbitrary amount of vertices. For many well-known problems, the
        corresponding hypergraph version belongs to NP due to the higher
        complexity and irregularity it presents. This paper explores various
        techniques applied to other large-scale and complex problems in order to
        investigate the main ideas they are based on. The main focus is on
        techniques for reducing complexity in a meaningful way, and effectively
        searching for solutions in a massive problem space with local search
        algorithms. As there is significantly less research done on hypergraphs,
        this paper attempts to view existing knowledge on hypergraphs and ways
        to solve other large-scale problems with the aim of identifying future
        potential, and avenues of research with regards to solving large-scale
        complex hypergraph problems in an efficient way.
      </p>
    </div>
  );
}
