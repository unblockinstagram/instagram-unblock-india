import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, Lock, Globe, Bot } from "lucide-react";
import { useEffect, useState } from "react";

export default function UnblockInstagramIndia() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [abHindiVariant, setAbHindiVariant] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    try {
      const response = await fetch("https://your-backend-api.com/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  useEffect(() => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => {
        if (data.country_code === "IN") {
          setAbHindiVariant(true);
        }
      })
      .catch((err) => console.warn("Geo lookup failed", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white py-12 px-4 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          {abHindiVariant
            ? "🚫 भारत में Instagram ब्लॉक है?"
            : "🚫 Instagram заблокирован в Индии?"}
        </h1>
        <p className="text-lg mb-8">
          {abHindiVariant
            ? "अभी तुरंत Instagram तक तेज़ और सुरक्षित पहुँच पाएं — आसान तरीका।"
            : "Получи быстрый и безопасный доступ к Instagram прямо сейчас. Рабочее решение — без заморочек."}
        </p>

        <Card className="shadow-xl border-2 border-indigo-300">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="text-indigo-600" />
              <p className="font-semibold">
                {abHindiVariant ? "सुरक्षित और निजी कनेक्शन" : "Надёжное шифрование и конфиденциальность"}
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="text-indigo-600" />
              <p className="font-semibold">
                {abHindiVariant ? "पूरे भारत में कार्य करता है" : "Работает в любой точке Индии"}
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="text-green-600" />
              <p className="font-semibold">
                {abHindiVariant ? "2 मिनट में एक्सेस — बिना रजिस्ट्रेशन" : "Доступ за 2 минуты — без регистрации"}
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-6">
              <Bot className="text-blue-600" />
              <p className="font-semibold">
                {abHindiVariant ? (
                  <>
                    Telegram बॉट से तुरंत सहायता: {" "}
                    <a
                      href="https://t.me/yourbot"
                      className="underline text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @yourbot
                    </a>
                  </>
                ) : (
                  <>
                    Помощь через Telegram-бота: {" "}
                    <a
                      href="https://t.me/yourbot"
                      className="underline text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @yourbot
                    </a>
                  </>
                )}
              </p>
            </div>

            {submitted ? (
              <p className="text-green-700 font-medium">
                ✅ {abHindiVariant ? "एक्सेस लिंक आपके ईमेल पर भेजा गया है!" : "Доступ отправлен на вашу почту!"}
              </p>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Input
                  placeholder={abHindiVariant ? "अपना ईमेल दर्ज करें" : "Введи email для доступа"}
                  className="w-full sm:w-2/3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button className="w-full sm:w-1/3" onClick={handleSubmit}>
                  {abHindiVariant ? "एक्सेस प्राप्त करें" : "Получить доступ"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <p className="text-sm text-gray-600 mt-6">
          🔒 {abHindiVariant
            ? "हम आपका डेटा सेव नहीं करते। लिंक और निर्देश ईमेल पर मिलेंगे।"
            : "Мы не сохраняем ваши данные. Вы получите ссылку с инструкцией на email."}
        </p>
      </div>
    </div>
  );
}
