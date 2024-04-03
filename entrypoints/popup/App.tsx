import { useState } from "react";
import { INITIAL_CHAT } from "./constants";
import { genTextAPI } from "./api";
import { Button, Card, Input, Typography } from "antd";
import CTable from "./components/CTable";
import "./App.css";

const initText = `You are a Senior Quality Assurance.
Please write Test cases cover the feature "Create Appointment". User can manually create by imput form with some information (Name, phone number, ID card, purpose and host information). Name, phone number, ID card are required fields. 
I want show result on the table with fields (No., Summary test case, Priority, Test areas, Test Activities, Components)`;

function App() {
  const [input, setInput] = useState<string>(initText);
  const [result, setResult] = useState<Array<Array<string>>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const embeddings = async () => {
    if (!input) return;
    setLoading(true);

    const templatePrompt = `You are a Senior Quality Assurance.
    Please write Test cases cover the feature ${input}
    I want show result on the table with fields (No., Summary test case, Priority, Test areas, Test Activities, Components)`;

    let data = await genTextAPI(templatePrompt);

    result.length = 0;

    if (data.match(/\|.+/g)) {
      const convertData = data.match(/\|.+/g);
      data = [...new Set(convertData)].join("\n");
    }

    data.split(/\r?\n/).forEach((item, index) => {
      if (index !== 1)
        result.push(
          item
            .split("|")
            .filter((v) => v)
            .map((v) => v.trim().replace(/\*\*/g, ""))
        );
    });

    setLoading(false);
    setResult(Array.from(result));
  };

  return (
    <div className="container">
      <Input.TextArea
        placeholder="Enter text"
        value={input}
        rows={4}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        disabled={!input}
        loading={loading}
        block
        type="primary"
        onClick={embeddings}
      >
        Submit
      </Button>
      <Card size="small" className="result">
        {!result ? (
          <Typography.Text disabled>Result will be here</Typography.Text>
        ) : (
          <CTable
            pagination={false}
            header={result[0] || []}
            data={result.slice(1)}
          />
        )}
      </Card>
    </div>
  );
}

export default App;
