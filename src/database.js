const database = [
  { cliente: "23 M&M", equipo: "CUBISCAN 150", ciudad: "BOGOTÁ D.C.", serial: "19110469", codigo: "(1100-100)" },
  { cliente: "ALMAVIVA", equipo: "CUBISCAN 325", ciudad: "BOGOTÁ D.C.", serial: "1903215", codigo: "(1100-100)" },
  { cliente: "AVON", equipo: "CUBISCAN 125", ciudad: "MEDELLÍN", serial: "7130697", codigo: "(5000-100)" },
  { cliente: "COORDINADORA", equipo: "CUBISCAN 150", ciudad: "BOGOTÁ D.C.", serial: "16030055", codigo: "(1100-100)" },
  { cliente: "COORDINADORA", equipo: "CUBISCAN 150", ciudad: "BOGOTÁ D.C.", serial: "16030056", codigo: "(1100-100)" },
  { cliente: "COOPIDROGAS", equipo: "CUBISCAN 325", ciudad: "BOGOTÁ D.C.", serial: "1903216", codigo: "(1100-100)" },
  { cliente: "CRUZ VERDE", equipo: "CUBISCAN 125", ciudad: "COTA", serial: "19050084", codigo: "(2300-100)" },
  { cliente: "DEPRISA", equipo: "CUBISCAN 150", ciudad: "BUCARAMANGA", serial: "7050281", codigo: "(6000-100)" },
  { cliente: "DEPRISA", equipo: "CUBISCAN 150", ciudad: "CARTAGENA", serial: "7050283", codigo: "(7000-100)" },
  { cliente: "DEPRISA", equipo: "CUBISCAN 150", ciudad: "CUCUTA", serial: "7050282", codigo: "(6000-100)" },
  { cliente: "DEPRISA", equipo: "CUBISCAN 150", ciudad: "PEREIRA", serial: "7050180", codigo: "(6000-100)" },
  { cliente: "DEPRISA", equipo: "CUBISCAN 150", ciudad: "SANTA MARTA", serial: "7050284", codigo: "(7000-100)" },
  { cliente: "DHL EXPRESS", equipo: "CUBISCAN 200B", ciudad: "CALI", serial: "96120030", codigo: "(7600-100)" },
  { cliente: "DHL EXPRESS", equipo: "CUBISCAN 200TS", ciudad: "BOGOTÁ D.C.", serial: "1416246", codigo: "(1100-100)" },
  { cliente: "DHL EXPRESS", equipo: "CUBISCAN 200TS", ciudad: "BOGOTÁ D.C.", serial: "18102975", codigo: "(1100-100)" },
  { cliente: "DHL EXPRESS", equipo: "CUBISCAN 200B", ciudad: "BOGOTÁ D.C.", serial: "96120043", codigo: "(1100-100)" },
  { cliente: "DHL EXPRESS", equipo: "CUBISCAN 200TS", ciudad: "MEDELLÍN", serial: "21418169", codigo: "(5000-100)" },
  { cliente: "DHL EXPRESS", equipo: "CUBISCAN 150", ciudad: "BARRANQUILLA", serial: "19110183", codigo: "(7000-100)" },
  { cliente: "DHL EXPRESS", equipo: "CUBISCAN 150", ciudad: "CARTAGENA", serial: "19110025", codigo: "(7000-100)" },
  { cliente: "DHL EXPRESS", equipo: "CUBISCAN 150", ciudad: "BUCARAMANGA", serial: "7050238", codigo: "(6000-100)" },
  { cliente: "DHL EXPRESS", equipo: "CUBISCAN 75", ciudad: "BOGOTÁ D.C.", serial: "17070056", codigo: "(1100-100)" },
  { cliente: "ELITE FLOWER", equipo: "CUBISCAN 150", ciudad: "FACATATIVA", serial: "19110184", codigo: "(2300-100)" },
  { cliente: "FRESH LOGISTIK", equipo: "CUBISCAN 200TS", ciudad: "QUITO", serial: "14164250", codigo: "(9000-100)" },
  { cliente: "GLOBAL-TCC", equipo: "CUBISCAN 75", ciudad: "CALI", serial: "17070262", codigo: "(7600-122)" },
  { cliente: "GLOBAL-TCC", equipo: "CUBISCAN 75", ciudad: "MEDELLÍN", serial: "17070263", codigo: "(5000-122)" },
  { cliente: "GLOBAL-TCC", equipo: "CUBISCAN 75", ciudad: "BOGOTÁ D.C.", serial: "17070264", codigo: "(1100-122)" },
  { cliente: "KUEHNE NAGEL", equipo: "CUBISCAN 100", ciudad: "FUNZA", serial: "5011975", codigo: "(2500-100)" },
  { cliente: "LA FAVORITA", equipo: "CUBISCAN 100", ciudad: "QUITO", serial: "16010228", codigo: "(9000-100)" },
  { cliente: "LA FAVORITA", equipo: "CUBISCAN 100", ciudad: "QUITO", serial: "16010492", codigo: "(9000-100)" },
  { cliente: "LA FAVORITA", equipo: "CUBISCAN 325", ciudad: "QUITO", serial: "19030115", codigo: "(9000-100)" },
  { cliente: "LANDFAST", equipo: "CUBISCAN 200TS", ciudad: "SIBERIA FUNZA", serial: "14164239", codigo: "(2300-100)" },
  { cliente: "LANDFAST", equipo: "CUBISCAN 200SQ", ciudad: "SIBERIA FUNZA", serial: "22409685", codigo: "(2300-100)" },
  { cliente: "LOGYCA", equipo: "CUBISCAN 125", ciudad: "BOGOTÁ D.C.", serial: "7130082", codigo: "(1100-100)" },
  { cliente: "MARKETING PERSONAL", equipo: "CUBISCAN 325", ciudad: "MEDELLÍN", serial: "17010192", codigo: "(5000-100)" },
  { cliente: "MAVESA", equipo: "CUBISCAN 325", ciudad: "GUAYAQUIL", serial: "22090021", codigo: "(9000-100)" },
  { cliente: "MERCADO LIBRE", equipo: "CUBISCAN 325", ciudad: "FUNZA", serial: "23080072", codigo: "(2500-100)" },
  { cliente: "MERCADO LIBRE", equipo: "CUBISCAN 100", ciudad: "FUNZA", serial: "18090234", codigo: "(2500-100)" },
  { cliente: "MERCADO LIBRE", equipo: "CUBISCAN 150", ciudad: "FUNZA", serial: "19110110", codigo: "(2500-100)" },
  { cliente: "MONTRA COLOMBIA SAS", equipo: "FINANCIERO", ciudad: "BOGOTÁ D.C.", serial: "", codigo: "(1100-200)" },
  { cliente: "MONTRA COLOMBIA SAS", equipo: "ADMINISTRATIVO", ciudad: "BOGOTÁ D.C.", serial: "", codigo: "(1100-200)" },
  { cliente: "MONTRA COLOMBIA SAS", equipo: "COMERCIAL", ciudad: "BOGOTÁ D.C.", serial: "", codigo: "(1100-200)" },
  { cliente: "MONTRA COLOMBIA SAS", equipo: "INGENIERÍA", ciudad: "BOGOTÁ D.C.", serial: "", codigo: "(1100-200)" },
  { cliente: "MONTRA COLOMBIA SAS", equipo: "PUBLICIDAD", ciudad: "BOGOTÁ D.C.", serial: "", codigo: "(1100-200)" },
  { cliente: "MONTRA COLOMBIA SAS", equipo: "BIENESTAR", ciudad: "BOGOTÁ D.C.", serial: "", codigo: "(1100-200)" },
  { cliente: "MONTRA COLOMBIA SAS", equipo: "CAPACITACIÓN", ciudad: "BOGOTÁ D.C.", serial: "", codigo: "(1100-200)" },
  { cliente: "MONTRA COLOMBIA SAS", equipo: "HERRAMIENTA", ciudad: "BOGOTÁ D.C.", serial: "", codigo: "(1100-200)" },
  { cliente: "MONTRA COLOMBIA SAS", equipo: "SGSST", ciudad: "BOGOTÁ D.C.", serial: "", codigo: "(1100-200)" },
  { cliente: "PANAMERICANA", equipo: "CUBISCAN 125", ciudad: "BOGOTÁ D.C.", serial: "7130909", codigo: "(1100-100)" },
  { cliente: "PANAMERICANA", equipo: "CUBISCAN 125", ciudad: "BOGOTÁ D.C.", serial: "7130910", codigo: "(1100-100)" },
  { cliente: "SKECHERS", equipo: "CUBISCAN 100", ciudad: "FUNZA", serial: "18090318", codigo: "(2500-100)" },
  { cliente: "SODIMAC", equipo: "CUBISCAN 150", ciudad: "TENJO", serial: "7050074", codigo: "(2300-100)" },
  { cliente: "TCC", equipo: "CUBISCAN 200TS", ciudad: "SIBERIA TENJO", serial: "19115740", codigo: "(7990-120)" },
  { cliente: "TCC", equipo: "CUBISCAN 200SQ", ciudad: "BOGOTÁ D.C.", serial: "22404990", codigo: "(1100-120)" },
  { cliente: "TCC", equipo: "CUBISCAN 75", ciudad: "MEDELLÍN", serial: "17070342", codigo: "(5000-120)" },
  { cliente: "TCC", equipo: "CUBISCAN 200SQ", ciudad: "BOGOTÁ D.C.", serial: "22401684", codigo: "(5000-120)" },
  { cliente: "TCC", equipo: "CUBISCAN 200SQ", ciudad: "CALI", serial: "22404991", codigo: "(7600-120)" },
  { cliente: "TCC", equipo: "CUBISCAN 75", ciudad: "CALI", serial: "17070331", codigo: "(7600-120)" },
  { cliente: "TCC", equipo: "CUBISCAN 75", ciudad: "BOGOTÁ D.C.", serial: "17070340", codigo: "(1100-120)" },
  { cliente: "TIA", equipo: "CUBISCAN 325", ciudad: "GUAYAQUIL", serial: "19031006", codigo: "(9000-100)" }
];

export default database;