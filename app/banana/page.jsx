"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function MonkeyFun() {
  const [banana, setBanana] = useState("");
  const [monkeyImage, setMonkeyImage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMonkeyData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/monkey");
      const data = await response.json();
      setBanana(data.count);
      setMonkeyImage(data.image);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMonkeyData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-brown-700">Bananas counter</h1>
      <Card className="w-96 p-4 bg-white shadow-lg rounded-2xl">
        <CardContent className="flex flex-col items-center text-center">
          {loading ? (
            <Loader2 className="animate-spin w-8 h-8 text-gray-600" />
          ) : (
            <>
              <p className="text-lg font-semibold mb-4">{banana}</p>
              {monkeyImage && (
                <img
                  src={monkeyImage}
                  alt="Monkey"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              )}
            </>
          )}
          <Button onClick={fetchMonkeyData} className="mt-4 bg-brown-600 hover:bg-brown-700 text-black">
            Give me my bananas !
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

