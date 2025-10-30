import React from "react";
import Layout from "./components/Layout/Layout";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";



function App() {
  return (
    <Layout>
      <Card title="Welcome to PLP Task Manager">
        <p className="mb-4">Manage your daily tasks efficiently!</p>
        <div className="flex gap-4">
          <Button label="Primary" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Danger" variant="danger" />
        </div>
      </Card>
    </Layout>
  );
}

export default App;
