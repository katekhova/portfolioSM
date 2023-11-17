#!/bin/sh
date >> statistic.txt
wc -w scss/* deploy/scripts/* deploy/*.html >> statistic.txt
date >> statistic.txt
echo  >> statistic.txt
