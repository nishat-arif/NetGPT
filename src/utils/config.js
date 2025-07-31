
export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+  process.env.REACT_APP_TMDB_KEY
  }
};

export const LANG = {
  'eng':{
    btnText : 'search',
    placeholder : "Movie recommendation based on genre..."
  },
  'hin' :{
    btnText : 'खोज',
    placeholder : "आज आप क्या देखना चाहते हैं?"
  },

  'spa':{
    btnText : 'buscar',
    placeholder : "Oye, ¿qué quieres ver hoy?"
  }

}

export const SUPPORTED_LANGUAGES = [
  { identifier: "eng", name: "Eng" },
  { identifier: "hin", name: "Hin" },
  { identifier: "spa", name: "Spa" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
