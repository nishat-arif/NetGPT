export const TMDB_API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2I5OThmMTRjMWFkNzgzZGE1ZmM2OGI3YjJkNzI5MyIsIm5iZiI6MTc1Mzg5NTg2NC4yNDUsInN1YiI6IjY4OGE1M2I4MGIyMzJlZTFhNmExYTY1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oIsv6Au5NocCxFknofQ8DM7FKAn69_KSEEzKkwjCznQ'

export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2I5OThmMTRjMWFkNzgzZGE1ZmM2OGI3YjJkNzI5MyIsIm5iZiI6MTc1Mzg5NTg2NC4yNDUsInN1YiI6IjY4OGE1M2I4MGIyMzJlZTFhNmExYTY1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oIsv6Au5NocCxFknofQ8DM7FKAn69_KSEEzKkwjCznQ'
  }
};

export const LANG = {
  'eng':{
    btnText : 'search',
    placeholder : "Hey, What do you want to watch today?"
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
