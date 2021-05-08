for ((i=1;i<=100;i++)); do 
  sleep 3
curl -v --header "Connection: keep-alive" "localhost:1987/clientes"; 

done
