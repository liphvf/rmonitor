#!/usr/bin/bash

# Give all CPUs usage percent
ps fuxw | awk '{ if ($3 ~ /^[0-9]/) {SUM +=$3}} END  {print SUM"%"}'