/* Container class for the literature review section of the website */
//TODO Get content from external source; GraphQL/database/firebase?
import React, { forwardRef } from "react";

//Components
import HypergraphSVG from "../containers/HypergraphSVG";

//Stylesheet
import "./css/LiteratureReview.css";

//image
import paper from "../assets/paper.png";

const LiteratureReview = forwardRef((props, ref) => {
  return (
    <div className="background">
      <div className="lit" ref={ref}>
        <h1 id="lit-h1" className="project-title">
          Literature Review
        </h1>
        <h2 id="lit-h2" className="motivation">
          Motivation
        </h2>
        <p id="lit-rev-paragraph" className="motivation-paragraph">
          The literature review is an excellent tool when entering a new domain
          in which you're unfamiliar with the state of the art. The process
          requires a thorough review of both pivotal historical results, as well
          as more recent research.
          <br />
          <br />A literature review should be more than a retelling of the
          various sources, it is important that the author attempts to
          synthesize the accumulated knowledge in order to present something
          new, i.e; a new framework to analyze the field, new methods etc.
          <br />
          <br />I recently discovered the existence of hypergraphs, a
          generalization of the more well-known graph. As hypergraphs greatly
          intrigued me, I wrote a literature review as part of the process of
          familiarizing myself with them.
        </p>
        <img src={paper} alt="illustrate paper" className="paper" />
        <h2 id="lit-h2" className="hypergraph-visual">
          Hypergraph
        </h2>
        <div className="hypergraph-canvas">
          <HypergraphSVG />
        </div>
        <h2 id="lit-h2" className="avail-status">
          Availability
        </h2>
        <p id="lit-rev-paragraph" className="avail-status-paragraph">
          I had a lot of fun working on this short paper (4 pages), and I
          learned more than I expected. By surveying papers from various areas I
          found methods for approximating solutions in a meaningful way, while
          also reducing problem spaces by borrowing insight from a range of
          differing fields. As I feel that I found an avenue of research worth
          spending some time on - I have decided to not publish my paper on this
          website as I still regard it as a work in progress.
          <br />
          <br /> However, if you are looking for a good read I recommend{" "}
          <b>
            "Delaunay-Triangulation-Based Variable Neighborhood Search to Solve
            Large-Scale General Colored Traveling Salesman Problems" - Xu and
            Zhou
          </b>
          . This paper demonstrates how mathematical knowledge, in this case;
          Delaunay Triangulation, can be used in order to eliminate possible
          solutions that are obviously sub-optimal. <br />
          <br />I also recommend reading{" "}
          <b>"Practical Parallel Hypergraph Algorithms" - Julian Shun.</b> It
          is, to my knowledge, the first work that has been done on developing a
          parallelized hypergraph framework, and provides valuable insight on
          ways to work with these problems. I have given talks on both of these
          papers - feel free to reach out if you want a link to the slides I
          used.
        </p>
        <h2 id="lit-h2" className="abstract-title">
          Techniques for Working with Large-Scale Complex Problems in a
          Hypergraph Setting
        </h2>
        <p className="abstract-paragraph">
          <b>Abstract - </b> A Hypergraph is a generalization of the more
          well-known graph. It enables the modeling of group relationships by
          admitting hyperedges. While an edge in a graph represents a binary
          relationship by connecting exactly two vertices, a hyperedge is an
          edge that can connect an arbitrary amount of vertices. For many
          well-known problems, the corresponding hypergraph version belongs to
          NP due to the higher complexity and irregularity it presents. This
          paper explores various techniques applied to other large-scale and
          complex problems in order to investigate the main ideas they are based
          on. The main focus is on techniques for reducing complexity in a
          meaningful way, and effectively searching for solutions in a massive
          problem space with local search algorithms. As there is significantly
          less research done on hypergraphs, this paper attempts to view
          existing knowledge on hypergraphs and ways to solve other large-scale
          problems with the aim of identifying future potential, and avenues of
          research with regards to solving large-scale complex hypergraph
          problems in an efficient way.
        </p>
      </div>
    </div>
  );
});

export default LiteratureReview;

/*
export default function LiteratureReview(props, ref) {
  return (
    <div className="lit" forwardRef={ref}>
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
*/
