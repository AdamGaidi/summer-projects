import React from "react";

import "./css/HypergraphSVG.css"

export default function HypergraphSVG(){
        return <svg width="100%" height="100%" className="hyper-svg">
        <circle cx="50%" cy="8%" r={8} fill="#fff" className="node-top-1">
            <animate attributeName="cx" values="50%; 53%; 50%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="8%; 7%; 8%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="fill" values="#fff; #06a3f8; #fff" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="27%" cy="22%" r={8} fill="#fff" className="node-top-2">
            <animate attributeName="cx" values="27%; 24%; 27%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="22%; 23%; 22%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="fill" values="#fff; #06a3f8; #fff" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="77%" cy="22%" r={8} fill="#fff" className="node-top-3">
            <animate attributeName="cx" values="77%; 80%; 77%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="22%; 21%; 22%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="fill" values="#fff; #06a3f8; #fff" dur="5s" repeatCount="indefinite"/>
        </circle>


        <circle cx="46%" cy="37%" r={8} fill="#fff" className="node-middle">
            <animate attributeName="cx" values="46%; 40%; 46%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="fill" values="#fff; #3ADEA2; #fff" dur="5s" repeatCount="indefinite"/>
        </circle>


        <circle cx="35%" cy="67%" r={8} fill="#fff" className="node-bottom">
            <animate attributeName="cx" values="35%; 25%; 35%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="67%; 70%; 67%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="fill" values="#fff; #AF64E6; #fff" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="25%" cy="54%" r={8} fill="#fff" className="node-bottom">
            <animate attributeName="cx" values="25%; 18%; 25%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="54%; 47%; 54%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="fill" values="#fff; #AF64E6; #fff" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="71%" cy="60%" r={8} fill="#fff" className="node-bottom">
            <animate attributeName="cx" values="71%; 77%; 71%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="60%; 65%; 60%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="fill" values="#fff; #AF64E6; #fff" dur="5s" repeatCount="indefinite"/>
        </circle>

        
        <line x1="50%" y1="8%" x2="27%" y2="22%" stroke-width={2} stroke="#fff" >
            <animate attributeName="x1" values="50%; 53%; 50%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="y1" values="8%; 7%; 8%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="x2" values="27%; 24%; 27%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="y2" values="22%; 23%; 22%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="stroke" values="#fff; #06a3f8; #fff" dur="5s" repeatCount="indefinite"/>
        </line>
        <line x1="27%" y1="22%" x2="46%" y2="26%" stroke-width={2} stroke="#fff" >
            <animate attributeName="x1" values="27%; 24%; 27%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="y1" values="22%; 23%; 22%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="stroke" values="#fff; #06a3f8; #fff" dur="5s" repeatCount="indefinite"/>
        </line>
        <line x1="77%" y1="22%" x2="46%" y2="26%" stroke-width={2} stroke="#fff" >
            <animate attributeName="x1" values="77%; 80%; 77%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="y1" values="22%; 21%; 22%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="stroke" values="#fff; #06a3f8; #fff" dur="5s" repeatCount="indefinite"/>
        </line>


        <line x1="46%" y1="37%" x2="46%" y2="26%" stroke-width={2} stroke="#fff" >
            <animate attributeName="x1" values="46%; 40%; 46%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="stroke" values="#fff; #3ADEA2; #fff" dur="5s" repeatCount="indefinite"/>
        </line>
        <line x1="46%" y1="37%" x2="40%" y2="59%" stroke-width={2} stroke="#fff" >
        <animate attributeName="x1" values="46%; 40%; 46%" dur="5s" repeatCount="indefinite" />
        <animate attributeName="stroke" values="#fff; #3ADEA2; #fff" dur="5s" repeatCount="indefinite"/>
        </line>

        
        <line x1="25%" y1="54%" x2="40%" y2="59%" stroke-width={2} stroke="#fff" >
            <animate attributeName="x1" values="25%; 18%; 25%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="y1" values="54%; 47%; 54%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="stroke" values="#fff; #AF64E6; #fff" dur="5s" repeatCount="indefinite"/>
        </line>
        <line x1="71%" y1="60%" x2="40%" y2="59%" stroke-width={2} stroke="#fff" >
            <animate attributeName="x1" values="71%; 77%; 71%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="y1" values="60%; 65%; 60%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="stroke" values="#fff; #AF64E6; #fff" dur="5s" repeatCount="indefinite"/>
        </line>
        <line x1="35%" y1="67%" x2="40%" y2="59%" stroke-width={2} stroke="#fff" >
            <animate attributeName="x1" values="35%; 25%; 35%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="y1" values="67%; 70%; 67%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="stroke" values="#fff; #AF64E6; #fff" dur="5s" repeatCount="indefinite"/>
        </line>


    </svg>
}