const mqtt = require('mqtt');
require('dotenv').config(); // Load environment variables from .env file

const brokerUrl = process.env.MQTT_BROKER_URL || 'mqtt://localhost';
// const clientId = process.env.MQTT_CLIENT_ID || 'default-client';
// const username = process.env.MQTT_USERNAME;
// const password = process.env.MQTT_PASSWORD;

const client = mqtt.connect(brokerUrl, {
//   clientId: clientId,
//   username: username,
//   password: password,
});

client.on('connect', () => {
  console.log('Connected to MQTT broker');

  // Subscribe to a topic
  const topic = 'test';
  client.subscribe(topic, (err) => {
    if (!err) {
      console.log(`Subscribed to ${topic}`);
    }
  });

  // Publish a message to a topic
  const message = 'Hello, MQTT!';
  client.publish(topic, message);
});

client.on('message', (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
});

client.on('error', (err) => {
  console.error(`Error: ${err}`);
});

client.on('close', () => {
  console.log('Connection to MQTT broker closed');
});

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  client.end();
  process.exit();
});
