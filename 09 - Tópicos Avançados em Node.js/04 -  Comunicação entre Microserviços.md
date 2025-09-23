#Como fazer a comunicação entre microserviços?

Microserviços podem se comunicar por REST APIs, mensagens assíncronas (com RabbitMQ, Kafka) ou gRPC (protocolos mais rápidos e binários).

O exemplo acima usa uma comunicação síncrona via HTTP (GET + POST). Em sistemas mais complexos, você pode usar filas de mensagens para uma comunicação assíncrona mais robusta.
