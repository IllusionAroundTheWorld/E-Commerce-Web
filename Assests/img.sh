#!/bin/bash
echo "Your are in The Script File."
A=0;
while true; do
    read -p "Enter the URL: " $URL
    if `wget -O "Dress$A.jpg" $URL`;then
        echo "Download Success"
        (($A++));
        echo "$A"
    else
        echo "Failed";
    fi

done;

