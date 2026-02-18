from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle

app = FastAPI()

class Message(BaseModel):
    text: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

@app.post("/predict")
def predict(message: Message):
    vector = vectorizer.transform([message.text])
    prediction = model.predict(vector)[0]
    prob = model.predict_proba(vector)[0]

    return {
        "prediction": "Spam" if prediction == 1 else "Not Spam",
        "confidence": float(max(prob))
    }
