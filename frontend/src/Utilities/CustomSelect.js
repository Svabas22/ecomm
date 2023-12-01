import React from "react";
import Select from "react-select";
function CustomSelect(props) {
  const options = [
    { label: "Brazil", value: "brazil" },
    { label: "Europe Nordic & East", value: "EUNE" },
    { label: "Europe West", value: "EUW" },
    { label: "Latin America North", value: "LAN" },
    { label: "Latin America South", value: "LAS" },
    { label: "North America", value: "NA" },
    { label: "Oceania", value: "OCE" },
    { label: "Russia", value: "RU" },
    { label: "Turkey", value: "TR" },
    { label: "Japan", value: "JP" },
    { label: "Republic of Korea", value: "KR" },
    { label: "The Philippines", value: "PH" },
    { label: "Singapore, Malaysia, & Indonesia", value: "SG" },
    { label: "Taiwan, Hong Kong, and Macao", value: "TW" },
    { label: "Thailand", value: "TH" },
    { label: "Vietnam", value: "VN" },
    { label: "Public Beta Environment", value: "PBE" },
  ];

  return <Select options={options} />;
}

export default CustomSelect;
