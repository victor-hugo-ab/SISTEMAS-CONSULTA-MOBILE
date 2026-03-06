import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
type Consulta = {
  id: number;
  paciente: string;
  medico: string;
  data: string;
  status: "agendada" | "confirmada" | "cancelada" | "realizada";
};
export default function App() {
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    paciente: "Carlos Andrade",
    medico: "Dr. Roberto Silva",
    data: "28/02/2026",
    status: "agendada",
  });
  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sistema de Consultas</Text>
      <View style={styles.card}>
        <Text>Paciente: {consulta.paciente}</Text>
        <Text>Médico: {consulta.medico}</Text>
        <Text>Data: {consulta.data}</Text>
        <Text>Status: {consulta.status}</Text>
        {consulta.status === "agendada" && (
          <Button title="Confirmar Consulta" onPress={confirmarConsulta} />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7700ff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "80%",
    padding: 30,
    backgroundColor: "#f0edf3",
    borderWidth: 3,
    alignItems: "center",
    borderRadius: 8,
  },
});