import React from 'react';
import './searchHitachi.css';
import { MDBDataTable, Link } from "mdbreact";

const searchHitachi = () => {
  const data = {
    columns: [
      {
        label: 'Type',
        field: 'Type',
        sort: 'asc',
        width: 150
      },
      {
        label: 'CLLI',
        field: 'CLLI',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Hardware',
        label: 'Hardware',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Name',
        field: 'Name',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Model',
        field: 'Model',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Serial Number',
        field: 'Serial Number',
        sort: 'asc',
        width: 100
      },
      {
        label: 'FIC',
        field: 'FIC',
        sort: 'asc',
        width: 100
      },
      {
        label: 'IP',
        field: 'IP',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Vendor',
        field: 'Vendor',
        sort: 'asc',
        width: 100,
      }
    ],
    rows: [
        {
            "Type": "VoIP",
            "CLLI": "ATLNGATL",
            "Hardware ": "decommissioned",
            "Name": "at4ga01hdc",
            "Model": "NSC-55",
            "Serial Number": "80351",
            "FIC": "50201.19",
            "IP": <a href="http://135.190.119.14">135.190.119.14</a>,
            "Vendor": <a href="./hitachivantara">Hitachi</a>
        },
        {
            "Type": "VoIP",
            "CLLI": "ATLNGATL",
            "Hardware ": "IBM",
            "Name": "at4ga01hdd",
            "Model": "AMS1000",
            "Serial Number": "77014505",
            "FIC": "60224.07",
            "IP": "http://135.190.142.20  http://135.190.142.21"
        },
        {
            "Type": "VoIP",
            "CLLI": "ATLNGATL",
            "Hardware ": "decommissioned",
            "Name": "at4ga02hdc",
            "Model": "NSC-55",
            "Serial Number": "42335",
            "FIC": "50202.07",
            "IP": "http://135.190.119.32"
        },
        {
            "Type": "VoIP",
            "CLLI": "ATLNGATL",
            "Hardware ": "decommissioned",
            "Name": "at4ga03hdc",
            "Model": "NSC-55",
            "Serial Number": "80172",
            "FIC": "50202.11",
            "IP": "http://135.190.119.50"
        },
        {
            "Type": "VoIP",
            "CLLI": "ATLNGATL",
            "Hardware ": "decommissioned",
            "Name": "at4ga04hdc",
            "Model": "NSC-55",
            "Serial Number": "80002",
            "FIC": "50202.15",
            "IP": "http://135.190.119.68"
        },
        {
            "CLLI": "ATLNGATL",
            "Hardware ": "decommissioned",
            "Name": "at4ga05hdc",
            "Model": "NSC-55",
            "Serial Number": "80391",
            "FIC": "50202.19",
            "IP": "http://135.190.119.86"
        },
        {
            "Type": "VoIP",
            "CLLI": "ATLNGATL",
            "Hardware ": "IBM",
            "Name": "at4ga06hdc",
            "Model": "NSC-55",
            "Serial Number": "42095",
            "FIC": "50205.08",
            "IP": "http://135.190.133.13"
        },
        {
            "Type": "VoIP",
            "CLLI": "CHCGILCL",
            "Hardware ": "IBM",
            "Name": "ch4il01hh3",
            "Model": "AMS2500",
            "Serial Number": "87017086",
            "FIC": "130213.14",
            "IP": "http://135.192.97.200  http://135.192.97.201"
        },
        {
            "CLLI": "CHCGILCL",
            "Hardware ": "IBM",
            "Name": "ch4il01vcs",
            "Model": "HUS-150DC",
            "Serial Number": "93060017",
            "FIC": "130203.02",
            "IP": "http://135.192.87.166 http://135.192.87.167"
        },
        {
            "Type": "VoIP",
            "CLLI": "CLEVOH02",
            "Hardware ": "IBM",
            "Name": "cl4oh01hh3",
            "Model": "AMS2500",
            "Serial Number": "87017083",
            "FIC": "70020.07",
            "IP": "http://135.192.192.124  http://135.192.192.125"
        },
        {
            "Type": "VoIP"
        },
        {
            "CLLI": "CLEVOH02",
            "Hardware ": "IBM",
            "Name": "cl4oh02hh3",
            "Model": "AMS2500",
            "Serial Number": "87017081",
            "FIC": "70018.05",
            "IP": "http://135.192.192.129  http://135.192.192.130"
        },
        {
            "Type": "VoIP"
        },
        {
            "Type": "VoIP",
            "CLLI": "CLEVOH02",
            "Hardware ": "IBM",
            "Name": "cl4oh03hh3",
            "Model": "AMS2500",
            "Serial Number": "87017099",
            "FIC": "70015.1",
            "IP": "http://135.192.119.124 http://135.192.119.125"
        },
        {
            "Type": "VoIP",
            "CLLI": "CLEVOH02",
            "Hardware ": "IBM",
            "Name": "cl4oh04hh3",
            "Model": "AMS2500",
            "Serial Number": "87017102",
            "FIC": "70010.01",
            "IP": "http://135.192.119.128 http://135.192.119.129"
        },
        {
            "Type": "VoIP",
            "CLLI": "CLEVOH02",
            "Hardware ": "IBM",
            "Name": "cl4oh05hh3",
            "Model": "AMS2500",
            "Serial Number": "87017087",
            "FIC": "70011.05",
            "IP": "http://135.192.229.200 http://135.192.229.201",
            "undefined": " "
        },
        {
            "Type": "VoIP",
            "CLLI": "DLLSTXTL",
            "Hardware ": "IBM",
            "Name": "da4tx01hdc",
            "Model": "NSC-55",
            "Serial Number": "83331",
            "FIC": "70307.02",
            "IP": "http://135.191.130.21"
        },
        {
            "CLLI": "DLLSTXTL",
            "Hardware ": "IBM",
            "Name": "da4tx01hh3",
            "Model": "AMS2500",
            "Serial Number": "87017006",
            "FIC": "40023.07",
            "IP": "http://135.191.162.83"
        },
        {
            "Type": "VoIP",
            "IP": "http://135.191.162.84"
        },
        {
            "CLLI": "DLLSTXTL",
            "Hardware ": "decommissioned",
            "Name": "da4tx02hdc",
            "Model": "NSC-55",
            "Serial Number": "83333",
            "FIC": "70308.09",
            "IP": "http://135.191.132.14"
        },
        {
            "Type": "VoIP",
            "CLLI": "DLLSTXTL",
            "Hardware ": "IBM",
            "Name": "da4tx02hh3",
            "Model": "AMS2500",
            "Serial Number": "87017024",
            "FIC": "40022.06",
            "IP": "http://135.191.164.67"
        },
        {
            "IP": "http://135.191.164.68"
        },
        {
            "Type": "VoIP",
            "CLLI": "DLLSTXTL",
            "Hardware ": "decommissioned",
            "Name": "da4tx03hdc",
            "Model": "NSC-55",
            "Serial Number": "83320",
            "FIC": "70308.12",
            "IP": "http://135.191.132.32"
        },
        {
            "CLLI": "DLLSTXTL",
            "Hardware ": "IBM",
            "Name": "da4tx03hh3",
            "Model": "AMS2500",
            "Serial Number": "87017040",
            "FIC": "40023.11",
            "IP": "http://135.191.168.11"
        },
        {
            "Type": "VoIP",
            "IP": "http://135.191.168.12"
        },
        {
            "CLLI": "DLLSTXTL",
            "Hardware ": "decommissioned",
            "Name": "da4tx04hdc",
            "Model": "NSC-55",
            "Serial Number": "83321",
            "FIC": "70307.09",
            "IP": "http://135.191.132.50"
        },
        {
            "Type": "VoIP",
            "CLLI": "DLLSTXTL",
            "Hardware ": "decommissioned",
            "Name": "da4tx05hdc",
            "Model": "NSC-55",
            "Serial Number": "83354",
            "FIC": "70307.12",
            "IP": "http://135.191.132.68"
        },
        {
            "CLLI": "DLLSTXTL",
            "Hardware ": "decommissioned",
            "Name": "da4tx06hdc",
            "Model": "NSC-55",
            "Serial Number": "72430",
            "FIC": "70308.13",
            "IP": "http://135.191.132.86"
        },
        {
            "Type": "VoIP",
            "CLLI": "DNVRCOMA",
            "Hardware ": "IBM",
            "Name": "de4co01hdc",
            "Model": "NSC-55",
            "Serial Number": "42151",
            "FIC": "30512.06",
            "IP": "http://135.193.132.25"
        },
        {
            "Type": "VoIP",
            "CLLI": "DNVRCOMA",
            "Hardware ": "IBM",
            "Name": "de4co01hdd",
            "Model": "AMS1000",
            "Serial Number": "77014599",
            "FIC": "30502.05",
            "IP": "http://135.193.132.220"
        },
        {
            "IP": "http://135.193.132.221"
        },
        {
            "Type": "VoIP",
            "CLLI": "DNVRCOMA",
            "Hardware ": "IBM",
            "Name": "de4co01hh3",
            "Model": "AMS2500",
            "Serial Number": "87017016",
            "FIC": "30615.04",
            "IP": "http://135.193.160.83"
        },
        {
            "IP": "http://135.193.160.84"
        },
        {
            "Type": "VoIP",
            "CLLI": "DNVRCOMA",
            "Name": "de4co02hdd",
            "Model": "AMS1000",
            "Serial Number": "77014568",
            "FIC": "30502.06",
            "IP": "Have Hitachi call the GCSC"
        },
        {
            "IP": "(Global Customer Service Center)"
        },
        {
            "IP": "at 866-326-6822 if they call us."
        },
        {
            "Type": "VoIP",
            "CLLI": "DNVRCOMA",
            "Hardware ": "IBM",
            "Name": "de4co02hh3",
            "Model": "AMS2500",
            "Serial Number": "87017020",
            "FIC": "30618.05",
            "IP": "http://135.193.162.67"
        },
        {
            "IP": "http://135.193.162.68"
        },
        {
            "Type": "VoIP",
            "CLLI": "DNVRCOMA",
            "Hardware ": "IBM",
            "Name": "de4co03hh3",
            "Model": "AMS2500",
            "Serial Number": "87017028",
            "FIC": "30617.05",
            "IP": "http://135.193.137.4"
        },
        {
            "IP": "http://135.193.137.5"
        },
        {
            "Type": "VoIP",
            "CLLI": "DNVRCOMA",
            "Hardware ": "IBM",
            "Name": "de4co04hh3",
            "Model": "AMS2500",
            "Serial Number": "87017078",
            "FIC": "30608.05",
            "IP": "http://135.193.162.162"
        },
        {
            "IP": "http://135.193.162.163"
        },
        {
            "Type": "VoIP",
            "CLLI": "KSCYMO09",
            "Hardware ": "IBM",
            "Name": "ka4mo01hh3",
            "Model": "AMS2500",
            "Serial Number": "87017085",
            "FIC": "90088.02",
            "IP": "http://135.191.88.200"
        },
        {
            "IP": "http://135.191.88.201"
        },
        {
            "Type": "VoIP",
            "CLLI": "LSANCA03",
            "Hardware ": "decommissioned",
            "Name": "la4ca01hda",
            "Model": "9570",
            "Serial Number": "65010954",
            "FIC": "70614.03",
            "IP": "http://135.193.82.191"
        },
        {
            "IP": "http://135.193.82.192"
        },
        {
            "Type": "VoIP",
            "CLLI": "LSANCA03",
            "Hardware ": "decommissioned",
            "Name": "la4ca01hdc",
            "Model": "NSC-55",
            "Serial Number": "42180",
            "FIC": "70711.01",
            "IP": "http://135.193.82.185"
        },
        {
            "Type": "VoIP",
            "CLLI": "LSANCA03",
            "Hardware ": "IBM",
            "Name": "la4ca01hh3",
            "Model": "AMS2500",
            "Serial Number": "87017014",
            "FIC": "70711.06",
            "IP": "http://135.193.166.81"
        },
        {
            "IP": "http://135.193.166.82"
        },
        {
            "Type": "VoIP",
            "CLLI": "LSANCA03",
            "Hardware ": "decommissioned",
            "Name": "la4ca02hdc",
            "Model": "NSC-55",
            "Serial Number": "83137",
            "FIC": "70710.05",
            "IP": "http://135.193.82.87"
        },
        {
            "Type": "VoIP",
            "CLLI": "LSANCA03",
            "Hardware ": "decommissioned",
            "Name": "la4ca03hdc",
            "Model": "NSC-55",
            "Serial Number": "80368",
            "FIC": "70710.08",
            "IP": "http://135.193.82.88"
        },
        {
            "Type": "VoIP",
            "CLLI": "LSANCA03",
            "Hardware ": "decommissioned",
            "Name": "la4ca04hdc",
            "Model": "NSC-55",
            "Serial Number": "42338",
            "FIC": "70710.11",
            "IP": "http://135.193.88.204"
        },
        {
            "Type": "VoIP",
            "CLLI": "LSANCA03",
            "Hardware ": "decommissioned",
            "Name": "la4ca05hdc",
            "Model": "NSC-55",
            "Serial Number": "80374",
            "FIC": "70709.08",
            "IP": "http://135.193.88.208"
        },
        {
            "Type": "VoIP",
            "CLLI": "LSANCA03",
            "Hardware ": "decommissioned",
            "Name": "la4ca06hdc",
            "Model": "NSC-55",
            "Serial Number": "42127",
            "FIC": "70709.11",
            "IP": "http://135.193.88.212"
        },
        {
            "Type": "VoIP",
            "CLLI": "NSVLTNMT",
            "Hardware ": "IBM",
            "Name": "na4tn01hh3",
            "Model": "AMS2500",
            "Serial Number": "87017080",
            "FIC": "30301.03",
            "IP": "http://135.190.178.124"
        },
        {
            "IP": "http://135.190.178.125"
        },
        {
            "Type": "VoIP",
            "CLLI": "NSVLTNMT",
            "Hardware ": "IBM",
            "Name": "na4tn02hh3",
            "Model": "AMS2500",
            "Serial Number": "87017097",
            "FIC": "30301.06",
            "IP": "http://135.190.178.251"
        },
        {
            "IP": "http://135.190.178.252"
        },
        {
            "Type": "VoIP",
            "CLLI": "NSVLTNMT",
            "Hardware ": "IBM",
            "Name": "na4tn03hh3",
            "Model": "AMS2500",
            "Serial Number": "87017100",
            "FIC": "30301.14",
            "IP": "http://135.190.146.6"
        },
        {
            "IP": "http://135.190.146.7"
        },
        {
            "Type": "VoIP",
            "CLLI": "NSVLTNMT",
            "Hardware ": "IBM",
            "Name": "na4tn04hh3",
            "Model": "AMS2500",
            "Serial Number": "87017034",
            "FIC": "30304.05",
            "IP": "http://135.190.149.72"
        },
        {
            "IP": "http://135.190.149.73"
        },
        {
            "Type": "VoIP",
            "CLLI": "PHLAPASL",
            "Hardware ": "decommissioned",
            "Name": "ph4pa01hda",
            "Model": "9570",
            "Serial Number": "65016176",
            "FIC": "20020.17",
            "IP": "http://135.189.40.87"
        },
        {
            "IP": "http://135.189.40.88"
        },
        {
            "Type": "VoIP",
            "CLLI": "PHLAPASL",
            "Hardware ": "IBM",
            "Name": "ph4pa01hdb",
            "Model": "AMS500",
            "Serial Number": "75040883",
            "FIC": "20020.17",
            "IP": "http://135.189.40.163"
        },
        {
            "IP": "http://135.189.40.164"
        },
        {
            "Type": "VoIP",
            "CLLI": "PHLAPASL",
            "Hardware ": "decommissioned",
            "Name": "ph4pa01hdc",
            "Model": "NSC-55",
            "Serial Number": "42206",
            "FIC": "20024.29",
            "IP": "http://135.189.39.142"
        },
        {
            "Type": "VoIP",
            "CLLI": "PHLAPASL",
            "Hardware ": "IBM",
            "Name": "ph4pa01hh3",
            "Model": "AMS2500",
            "Serial Number": "87017004",
            "FIC": "20086.15",
            "IP": "http://135.189.166.80"
        },
        {
            "IP": "http://135.189.166.81"
        },
        {
            "Type": "VoIP",
            "CLLI": "PHLAPASL",
            "Hardware ": "IBM",
            "Name": "ph4pa02hda",
            "Model": "9570",
            "Serial Number": "65018207",
            "FIC": "20020.11",
            "IP": "http://135.189.40.142"
        },
        {
            "IP": "http://135.189.40.143"
        },
        {
            "Type": "VoIP",
            "CLLI": "PHLAPASL",
            "Hardware ": "IBM",
            "Name": "ph4pa02hdc",
            "Model": "NSC-55",
            "Serial Number": "42326",
            "FIC": "20023.33",
            "IP": "http://135.189.43.215"
        },
        {
            "Type": "VoIP",
            "CLLI": "PHLAPASL",
            "Hardware ": "IBM",
            "Name": "ph4pa03hdc",
            "Model": "NSC-55",
            "Serial Number": "42327",
            "FIC": "20024.23",
            "IP": "http://135.189.43.216"
        },
        {
            "Type": "VoIP",
            "CLLI": "PHLAPASL",
            "Hardware ": "IBM",
            "Name": "ph4pa04hdc",
            "Model": "NSC-55",
            "Serial Number": "42214",
            "FIC": "20024.35",
            "IP": "http://135.189.43.140"
        },
        {
            "Type": "VoIP",
            "CLLI": "PHLAPASL",
            "Hardware ": "IBM",
            "Name": "ph4pa05hdc",
            "Model": "NSC-55",
            "Serial Number": "83247",
            "FIC": "20125.27",
            "IP": "http://135.189.43.144"
        },
        {
            "Type": "VoIP",
            "CLLI": "PHLAPASL",
            "Hardware ": "IBM",
            "Name": "ph4pa06hdc",
            "Model": "NSC-55",
            "Serial Number": "83245",
            "FIC": "20125.33",
            "IP": "http://135.189.43.148"
        },
        {
            "Type": "VoIP",
            "CLLI": "SLKCUTMA",
            "Hardware ": "IBM",
            "Name": "sc4ut01h25",
            "Model": "AMS2500",
            "Serial Number": "87017058",
            "FIC": "50020.07",
            "IP": "http://135.193.167.139"
        },
        {
            "IP": "http://135.193.167.140"
        },
        {
            "Type": "VoIP",
            "CLLI": "SLKCUTMA",
            "Hardware ": "IBM",
            "Name": "sc4ut01hh3",
            "Model": "AMS2500",
            "Serial Number": "87017037",
            "FIC": "50019.08",
            "IP": "http://135.193.188.66"
        },
        {
            "IP": "http://135.193.188.67"
        },
        {
            "Type": "VoIP",
            "CLLI": "SLKCUTMA",
            "Hardware ": "IBM",
            "Name": "sc4ut02hh3",
            "Model": "AMS2500",
            "Serial Number": "87017079",
            "FIC": "50020.12",
            "IP": "http://135.193.189.126"
        },
        {
            "IP": "http://135.193.189.127"
        },
        {
            "Type": "VoIP",
            "CLLI": "SLKCUTMA",
            "Hardware ": "IBM",
            "Name": "sc4ut03hh3",
            "Model": "AMS2500",
            "Serial Number": "87017093",
            "FIC": "50021.01",
            "IP": "http://135.193.189.130"
        },
        {
            "IP": "http://135.193.189.131"
        },
        {
            "Type": "VoIP",
            "CLLI": "SNANTXCA",
            "Hardware ": "IBM",
            "Name": "sn4tx01hh3",
            "Model": "AMS2500",
            "Serial Number": "87017082",
            "FIC": "50008.14",
            "IP": "http://135.191.87.127"
        },
        {
            "IP": "http://135.191.87.128"
        },
        {
            "Type": "VoIP",
            "CLLI": "SNANTXCA",
            "Hardware ": "IBM",
            "Name": "sn4tx02hh3",
            "Model": "AMS2500",
            "Serial Number": "87017095",
            "FIC": "50013.25",
            "IP": "http://135.191.87.253"
        },
        {
            "IP": "http://135.191.87.254"
        },
        {
            "Type": "VoIP",
            "CLLI": "SNANTXCA",
            "Hardware ": "IBM",
            "Name": "sn4tx03hh3",
            "Model": "AMS2500",
            "Serial Number": "87017098",
            "FIC": "50013.2",
            "IP": "http://135.191.121.126"
        },
        {
            "IP": "http://135.191.121.127"
        },
        {
            "Type": "VoIP",
            "CLLI": "SNANTXCA",
            "Hardware ": "IBM",
            "Name": "sn4tx04hh3",
            "Model": "AMS2500",
            "Serial Number": "87017103",
            "FIC": "50013.15",
            "IP": "http://135.191.121.194"
        },
        {
            "IP": "http://135.191.121.195"
        },
        {
            "Type": "VoIP",
            "CLLI": "STLSMO09",
            "Hardware ": "IBM",
            "Model": "CS121",
            "FIC": "60301.06",
            "IP": "http://135.191.142.132"
        },
        {
            "IP": "Power Inverter for sl4mo01hdd"
        },
        {
            "Type": "VoIP",
            "CLLI": "STLSMO09",
            "Hardware ": "IBM",
            "Name": "sl4mo01hdc",
            "Model": "NSC-55",
            "Serial Number": "82979",
            "FIC": "80061.08",
            "IP": "http://135.191.62.152"
        },
        {
            "Type": "VoIP",
            "CLLI": "STLSMO09",
            "Hardware ": "IBM",
            "Name": "sl4mo01hdd",
            "Model": "AMS1000",
            "Serial Number": "77014190",
            "FIC": "60301.06",
            "IP": "http://135.191.142.130"
        },
        {
            "IP": "http://135.191.142.131"
        },
        {
            "Type": "VoIP",
            "CLLI": "STLSMO09",
            "Hardware ": "IBM",
            "Name": "sl4mo01hh3",
            "Model": "AMS2500",
            "Serial Number": "87017013",
            "FIC": "60404.04",
            "IP": "http://135.191.160.83"
        },
        {
            "IP": "http://135.191.160.84"
        },
        {
            "Type": "VoIP",
            "CLLI": "STLSMO09",
            "Name": "sl4mo02hdd",
            "Model": "AMS1000",
            "Serial Number": "77014571",
            "FIC": "60301.07",
            "IP": "Have Hitachi call the GCSC"
        },
        {
            "IP": "(Global Customer Service Center)"
        },
        {
            "IP": "at 866-326-6822 if they call us."
        },
        {
            "Type": "VoIP",
            "CLLI": "STLSMO09",
            "Hardware ": "IBM",
            "Name": "sl4mo02hh3",
            "Model": "AMS2500",
            "Serial Number": "87017038",
            "FIC": "60414.05",
            "IP": "http://135.191.166.11"
        },
        {
            "IP": "http://135.191.166.12"
        },
        {
            "Type": "VoIP",
            "CLLI": "STLSMO09",
            "Hardware ": "IBM",
            "Name": "sl4mo03hh3",
            "Model": "AMS2500",
            "Serial Number": "87017033",
            "FIC": "60416.03",
            "IP": "http://135.191.216.66"
        },
        {
            "IP": "http://135.191.216.67"
        },
        {
            "Type": "IPS",
            "CLLI": "Allen TX",
            "Hardware ": "decommissioned",
            "Name": "alnimhs91",
            "Model": "AMS200",
            "Serial Number": "73013707",
            "FIC": "2.17",
            "IP": "http://135.173.125.203"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.125.213"
        },
        {
            "Type": "IPS",
            "CLLI": "Allen TX",
            "Hardware ": "decommissioned",
            "Name": "alnimhs92",
            "Model": "AMS200",
            "Serial Number": "73013626",
            "FIC": "1.17",
            "IP": "http://135.173.125.204"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.125.214"
        },
        {
            "Type": "IPS",
            "CLLI": "Allen TX",
            "Hardware ": "decommissioned",
            "Name": "alnsfcx11",
            "Model": "Brocade 4100",
            "Serial Number": "LX060052135",
            "IP": "http://135.173.125.63"
        },
        {
            "Type": "IPS",
            "CLLI": "Allen TX",
            "Hardware ": "decommissioned",
            "Name": "alnwmxs01",
            "Model": "AMS200",
            "Serial Number": "73012304",
            "FIC": "2.15",
            "IP": "http://135.173.125.201"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.125.211"
        },
        {
            "Type": "IPS",
            "CLLI": "Allen TX",
            "Hardware ": "decommissioned",
            "Name": "alnwmxs02",
            "Model": "AMS200",
            "Serial Number": "73012303",
            "FIC": "1.15",
            "IP": "http://135.173.125.202"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.125.212"
        },
        {
            "Type": "IPS",
            "CLLI": "Allen TX",
            "Hardware ": "decommissioned",
            "Name": "alnwmxs03",
            "Model": "AMS200",
            "Serial Number": "73060643",
            "FIC": "1.17",
            "IP": "http://135.173.125.205"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.125.215"
        },
        {
            "Type": "IPS",
            "CLLI": "Allen TX",
            "Hardware ": "decommissioned",
            "Name": "alnwmxs04",
            "Model": "AMS200",
            "Serial Number": "73060635",
            "FIC": "2.17",
            "IP": "http://135.173.125.206"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.125.216"
        },
        {
            "Type": "IPS",
            "CLLI": "Bridgeton MO",
            "Hardware ": "IBM",
            "Name": "bgtsnms01",
            "Model": "AMS200",
            "Serial Number": "73040457",
            "IP": "http://135.173.9.166"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.9.167"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "IBM",
            "Name": "frfsfcx01",
            "Model": "Brocade 4900",
            "Serial Number": "UC060003881",
            "FIC": "D210 E6.12.3",
            "IP": "http://135.173.160.61"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfsfcx02",
            "Model": "Brocade 4900",
            "Serial Number": "UC060012249",
            "FIC": "D210 E6.13.9",
            "IP": "http://135.173.160.62"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwcas01",
            "Model": "AMS200",
            "Serial Number": "73012921",
            "FIC": "E7.3.2",
            "IP": "http://135.173.160.90"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.190"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwfcx01",
            "Model": "Brocade 4900",
            "Serial Number": "UC060005280",
            "FIC": "E6.11.5",
            "IP": "http://135.173.160.65"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwfcx02",
            "Model": "Brocade 4900",
            "Serial Number": "UC060005287",
            "FIC": "E6.12.5",
            "IP": "http://135.173.160.66"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwlos01",
            "Model": "AMS200",
            "Serial Number": "73040498",
            "FIC": "E7.2.3",
            "IP": "http://135.173.160.101"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.201"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "IBM",
            "Name": "frfwlos02",
            "Model": "AMS200",
            "Serial Number": "73012519",
            "FIC": "E7.3.3",
            "IP": "http://135.173.160.102"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.202"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmds01",
            "Model": "AMS200",
            "Serial Number": "73012624",
            "FIC": "E7.2.4",
            "IP": "http://135.173.160.96"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.196"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmds02",
            "Model": "AMS200",
            "Serial Number": "73012970",
            "FIC": "E7.3.4",
            "IP": "http://135.173.160.97"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.197"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmds03",
            "Model": "AMS200",
            "Serial Number": "73013071",
            "FIC": "E7.2.5",
            "IP": "http://135.173.160.98"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.198"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmds04",
            "Model": "AMS200",
            "Serial Number": "73040499",
            "FIC": "E7.3.5",
            "IP": "http://135.173.160.99"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.199"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "IBM",
            "Name": "frfwmds05",
            "Model": "AMS200",
            "Serial Number": "73013043",
            "FIC": "E7.2.2",
            "IP": "http://135.173.160.100"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.200"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "IBM",
            "Name": "frfwmds06",
            "Model": "AMS200",
            "Serial Number": "73013650",
            "FIC": "E7.3.2",
            "IP": "http://135.173.160.103"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.203"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "IBM",
            "Name": "frfwmds11",
            "Model": "AMS200",
            "Serial Number": "73013647",
            "FIC": "E7.2.3",
            "IP": "http://135.173.160.104"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.204"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "IBM",
            "Name": "frfwmds12",
            "Model": "AMS200",
            "Serial Number": "73013644",
            "FIC": "E7.3.3",
            "IP": "http://135.173.160.105"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.205"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmhs01",
            "Model": "AMS200",
            "Serial Number": "73012939",
            "FIC": "E7.2.4",
            "IP": "http://135.173.160.91"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.191"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmhs02",
            "Model": "AMS200",
            "Serial Number": "73012947",
            "FIC": "E7.3.4",
            "IP": "http://135.173.160.92"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.192"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmhs03",
            "Model": "AMS200",
            "Serial Number": "73012948",
            "FIC": "E7.2.5",
            "IP": "http://135.173.160.93"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.193"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmhs04",
            "Model": "AMS200",
            "Serial Number": "73013070",
            "FIC": "E7.3.5",
            "IP": "http://135.173.160.94"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.194"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmhs05",
            "Model": "AMS200",
            "Serial Number": "73012636",
            "FIC": "E7.2.3",
            "IP": "http://135.173.160.95"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.195"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmhs06",
            "Model": "AMS200",
            "Serial Number": "73012065",
            "FIC": "E7.2.2",
            "IP": "http://135.173.160.106"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.206"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmxs01",
            "Model": "AMS200",
            "Serial Number": "73012954",
            "FIC": "E7.3.3",
            "IP": "http://135.173.160.81"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.181"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmxs02",
            "Model": "AMS200",
            "Serial Number": "73013069",
            "FIC": "E7.2.3",
            "IP": "http://135.173.160.82"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.182"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmxs03",
            "Model": "AMS200",
            "Serial Number": "73012945",
            "FIC": "E7.3.4",
            "IP": "http://135.173.160.83"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.183"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmxs04",
            "Model": "AMS200",
            "Serial Number": "73012516",
            "FIC": "E7.2.4",
            "IP": "http://135.173.160.84"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.184"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmxs05",
            "Model": "AMS200",
            "Serial Number": "73012922",
            "FIC": "E7.3.5",
            "IP": "http://135.173.160.85"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.185"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmxs06",
            "Model": "AMS200",
            "Serial Number": "73012946",
            "FIC": "E7.2.5",
            "IP": "http://135.173.160.86"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.186"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmxs07",
            "Model": "AMS200",
            "Serial Number": "73013072",
            "FIC": "E7.3.2",
            "IP": "http://135.173.160.87"
        },
        {
            "Type": "IPS",
            "IP": "http://135.173.160.187"
        },
        {
            "Type": "IPS",
            "CLLI": "Fairfield CA",
            "Hardware ": "decommissioned",
            "Name": "frfwmxs08",
            "Model": "AMS200",
            "Serial Number": "73012940",
            "FIC": "E7.2.2",
            "IP": "http://135.173.160.88"
        },
        {
            "Type": "WMSS ",
            "CLLI": "PLTNCA60",
            "Hardware ": "IBM",
            "Name": "pl1ca01hh3",
            "Model": "AMS2500",
            "Serial Number": "87040749",
            "FIC": "152.05",
            "IP": "http://135.28.53.209"
        },
        {
            "IP": "http://135.28.53.210"
        },
        {
            "IP": "HSNM2"
        },
        {
            "Type": "WMSS ",
            "CLLI": "RCSNTXHV",
            "Hardware ": "IBM",
            "Name": "rd1tx01hh3",
            "Model": "AMS2500",
            "Serial Number": "87040771",
            "FIC": "163.47",
            "IP": "http://135.28.195.39"
        },
        {
            "IP": "http://135.28.195.40"
        },
        {
            "IP": "HiTrack"
        },
        {
            "IP": "HSNM2"
        },
        {
            "Type": "WMSS ",
            "CLLI": "RCSNTXHV",
            "Hardware ": "Hitachi",
            "Name": "rd1tx01hns01smu01",
            "Model": "3090-G2",
            "Serial Number": "M2SEKW1120104",
            "FIC": "163.46",
            "IP": "Richardson HNAS GUI (SMU) (no proxy)"
        },
        {
            "Name": "hnas-smu in ESS"
        },
        {
            "Name": "nodes are hnas-node1 and hnas-node2"
        },
        {
            "Type": "Trinity",
            "CLLI": "ALPRGAED",
            "Hardware ": "IBM",
            "Name": "ar1ga01h25",
            "Model": "AMS2500",
            "Serial Number": "87041006",
            "FIC": "C-CQ055",
            "IP": "http://135.190.205.109"
        },
        {
            "Serial Number": "Use 7041006 when opening IBM case",
            "IP": "http://135.190.205.110"
        },
        {
            "Type": "Trinity",
            "CLLI": "SNDGCA64",
            "Hardware ": "IBM",
            "Name": "sd1ca01h25",
            "Model": "AMS2500",
            "Serial Number": "87041145",
            "FIC": "2EDQ062",
            "IP": "http://135.193.21.173"
        },
        {
            "Serial Number": "Use 7041145 when opening IBM case",
            "IP": "http://135.193.21.174"
        },
        {
            "Type": "NetDB ",
            "CLLI": "BGTNMOBU",
            "Hardware ": "IBM",
            "Name": "bgtnetdbhds",
            "Model": "AMS2100",
            "Serial Number": "83044015",
            "FIC": "KK35",
            "IP": "http://199.37.83.42"
        },
        {
            "IP": "http://199.37.83.43"
        }
          ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}
export default searchHitachi;


