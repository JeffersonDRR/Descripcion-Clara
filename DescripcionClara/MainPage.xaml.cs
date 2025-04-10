using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Microsoft.Maui.Controls;

namespace DescripcionClara
{
    public partial class MainPage : ContentPage
    {
        private Dictionary<string, List<string[]>> clientesDatos = new Dictionary<string, List<string[]>>
        {
            { "23 M&M", new List<string[]> { 
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 150", "19110469", "1100-100" }
            }},
            { "ALMAVIVA", new List<string[]> { 
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 325", "1903215", "1100-100" }
            }},
            { "AVON", new List<string[]> { 
                new string[] { "MEDELLÍN", "CUBISCAN 125", "7130697", "5000-100" }
            }},
            { "COORDINADORA", new List<string[]> { 
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 150", "16030055", "1100-100" },
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 150", "16030056", "1100-100" }
            }},
            { "COOPIDROGAS", new List<string[]> { 
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 325", "1903216", "1100-100" }
            }},
            { "CRUZ VERDE", new List<string[]> { 
                new string[] { "COTA", "CUBISCAN 125", "19050084", "2300-100" }
            }},
            { "DEPRISA", new List<string[]> { 
                new string[] { "BUCARAMANGA", "CUBISCAN 150", "7050281", "6000-100" },
                new string[] { "CARTAGENA", "CUBISCAN 150", "7050283", "7000-100" },
                new string[] { "CUCUTA", "CUBISCAN 150", "7050282", "6000-100" },
                new string[] { "PEREIRA", "CUBISCAN 150", "7050180", "6000-100" },
                new string[] { "SANTA MARTA", "CUBISCAN 150", "7050284", "7000-100" }
            }},
            { "DHL EXPRESS", new List<string[]> { 
                new string[] { "CALI", "CUBISCAN 200B", "96120030", "7600-100" },
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 200TS", "1416246", "1100-100" },
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 200TS", "18102975", "1100-100" },
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 200B", "96120043", "1100-100" },
                new string[] { "MEDELLÍN", "CUBISCAN 200TS", "21418169", "5000-100" },
                new string[] { "BARRANQUILLA", "CUBISCAN 150", "19110183", "7000-100" },
                new string[] { "CARTAGENA", "CUBISCAN 150", "19110025", "7000-100" },
                new string[] { "BUCARAMANGA", "CUBISCAN 150", "7050238", "6000-100" },
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 75", "17070056", "1100-100" }
            }},
            { "ELITE FLOWER", new List<string[]> { 
                new string[] { "FACATATIVA", "CUBISCAN 150", "19110184", "2300-100" }
            }},
            { "FRESH LOGISTIK", new List<string[]> { 
                new string[] { "QUITO", "CUBISCAN 200TS", "14164250", "9000-100" }
            }},
            { "GLOBAL-TCC", new List<string[]> { 
                new string[] { "CALI", "CUBISCAN 75", "17070262", "7600-122" },
                new string[] { "MEDELLÍN", "CUBISCAN 75", "17070263", "5000-122" },
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 75", "17070264", "1100-122" }
            }},
            { "KUEHNE NAGEL", new List<string[]> { 
                new string[] { "FUNZA", "CUBISCAN 100", "5011975", "2860-110" }
            }},
            { "LA FAVORITA", new List<string[]> { 
                new string[] { "QUITO", "CUBISCAN 100", "16010228", "9000-100" },
                new string[] { "QUITO", "CUBISCAN 100", "16010492", "9000-100" },
                new string[] { "QUITO", "CUBISCAN 325", "19030115", "9000-100" }
            }},
            { "LANDFAST", new List<string[]> { 
                new string[] { "SIBERIA FUNZA", "CUBISCAN 200TS", "14164239", "2300-100" },
                new string[] { "SIBERIA FUNZA", "CUBISCAN 200SQ", "22409685", "2300-100" }
            }},
            { "LOGYCA", new List<string[]> { 
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 125", "7130082", "1100-100" }
            }},
            { "MARKETING PERSONAL", new List<string[]> { 
                new string[] { "MEDELLÍN", "CUBISCAN 325", "17010192", "5000-100" }
            }},
            { "MAVESA", new List<string[]> { 
                new string[] { "GUAYAQUIL", "CUBISCAN 325", "22090021", "9000-100" }
            }},
            { "MERCADO LIBRE", new List<string[]> { 
                new string[] { "FUNZA", "CUBISCAN 325", "23080072", "2500-100" },
                new string[] { "FUNZA", "CUBISCAN 100", "18090234", "2500-100" },
                new string[] { "FUNZA", "CUBISCAN 150", "19110110", "2500-100" }
            }},
            { "MONTRA COLOMBIA SAS", new List<string[]> { 
                new string[] { "BOGOTÁ D.C.", "FINANCIERO", "", "1100-200" },
                new string[] { "BOGOTÁ D.C.", "ADMINISTRATIVO", "", "1100-200" },
                new string[] { "BOGOTÁ D.C.", "COMERCIAL", "", "1100-200" },
                new string[] { "BOGOTÁ D.C.", "INGENIERÍA", "", "1100-200" },
                new string[] { "BOGOTÁ D.C.", "PUBLICIDAD", "", "1100-200" },
                new string[] { "BOGOTÁ D.C.", "BIENESTAR", "", "1100-200" },
                new string[] { "BOGOTÁ D.C.", "CAPACITACIÓN", "", "1100-200" },
                new string[] { "BOGOTÁ D.C.", "HERRAMIENTA", "", "1100-200" },
                new string[] { "BOGOTÁ D.C.", "SGSST", "", "1100-200" }
            }},
            { "PANAMERICANA", new List<string[]> { 
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 125", "7130909", "1100-100" },
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 125", "7130910", "1100-100" }
            }},
            { "SKECHERS", new List<string[]> { 
                new string[] { "FUNZA", "CUBISCAN 100", "18090318", "2500-100" }
            }},
            { "SODIMAC", new List<string[]> { 
                new string[] { "TENJO", "CUBISCAN 150", "7050074", "2300-100" }
            }},
            { "TCC", new List<string[]> { 
                new string[] { "SIBERIA TENJO", "CUBISCAN 200TS", "19115740", "7990-120" },
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 200SQ", "22404990", "1100-120" },
                new string[] { "MEDELLÍN", "CUBISCAN 75", "17070342", "5000-120" },
                new string[] { "MEDELLÍN", "CUBISCAN 200SQ", "22401684", "5000-120" },
                new string[] { "CALI", "CUBISCAN 200SQ", "22404991", "7600-120" },
                new string[] { "CALI", "CUBISCAN 75", "17070331", "7600-120" },
                new string[] { "BOGOTÁ D.C.", "CUBISCAN 75", "17070340", "1100-120" }
            }},
            { "TIA", new List<string[]> { 
                new string[] { "GUAYAQUIL", "CUBISCAN 325", "19031006", "9000-100" }
            }}
        };
        private readonly List<string> lugaresTransporte = new List<string>
        {
            "CLI", "HOT", "CAS", "AERO", "OFI", "CIT"
        };

        private readonly Dictionary<string, string> conceptosTransporte = new Dictionary<string, string>
        {
            { "TRANSPORTE", "TRANS" },
            { "CENA", "CENA" },
            { "ALMUERZO", "ALMU" },
            { "DESAYUNO", "DES" },
            { "HERRAMIENTA", "HERR" },
            { "HOTEL", "HOT" },
            { "CAFETERIA", "CAF" },
            { "BIENESTAR", "BIEN" },
            { "ASEO", "ASE" },
            { "PAGO POR EQUIVOCACION", "CXC" },
            { "CLIENTE", "CLI" }
        };

        private readonly Dictionary<string, string> conceptosActividad = new Dictionary<string, string>
        {
            { "MANTENIMIENTO PREVENTIVO", "MAN P" },
            { "MANTENIMIENTO CORRECTIVO", "MAN C" },
            { "VISITA EXTRA", "VIS EXT" },
            { "INSTALACIÓN", "INS" },
            { "GARANTÍA", "GAR" },
            
        };

        public MainPage()
        {
            InitializeComponent();
            clientePicker.ItemsSource = new List<string>(clientesDatos.Keys);
            lugarInicialPicker.ItemsSource = lugaresTransporte;
            lugarFinalPicker.ItemsSource = lugaresTransporte;
            transportePicker.ItemsSource = new List<string>(conceptosTransporte.Keys);
            actividadPicker.ItemsSource = new List<string>(conceptosActividad.Keys);
            fechaActividadPicker.Date = DateTime.Now.Date; // Solo la fecha, sin tiempo
        }

        private void OnTransporteChanged(object sender, EventArgs e)
        {
            bool isTransporte = transportePicker.SelectedItem?.ToString() == "TRANSPORTE";
            lblLugarInicial.IsVisible = isTransporte;
            lugarInicialPicker.IsVisible = isTransporte;
            lblLugarFinal.IsVisible = isTransporte;
            lugarFinalPicker.IsVisible = isTransporte;
        }

        private void OnClienteChanged(object sender, EventArgs e)
        {
            ciudadPicker.SelectedItem = null;
            equipoPicker.SelectedItem = null;
            serialPicker.SelectedItem = null;
            ciudadPicker.ItemsSource = null; // Limpiar las ciudades

            if (clientePicker.SelectedItem is string clienteSeleccionado && 
                clientesDatos.ContainsKey(clienteSeleccionado))
            {
                var ciudades = clientesDatos[clienteSeleccionado]
                    .Select(x => x[0])
                    .Distinct()
                    .ToList();
                ciudadPicker.ItemsSource = ciudades;

                if (ciudades.Count == 1)
                {
                    ciudadPicker.SelectedItem = ciudades[0];
                }
            }
        }

        private void OnCiudadChanged(object sender, EventArgs e)
        {
            equipoPicker.SelectedItem = null;
            serialPicker.SelectedItem = null;
            equipoPicker.ItemsSource = null; // Limpiar los equipos

            if (clientePicker.SelectedItem is string clienteSeleccionado && 
                ciudadPicker.SelectedItem is string ciudadSeleccionada &&
                clientesDatos.ContainsKey(clienteSeleccionado))
            {
                var equipos = clientesDatos[clienteSeleccionado]
                    .Where(x => x[0] == ciudadSeleccionada)
                    .Select(x => x[1])
                    .Distinct()
                    .ToList();
                equipoPicker.ItemsSource = equipos;

                if (equipos.Count == 1)
                {
                    equipoPicker.SelectedItem = equipos[0];
                }
            }
        }

        private void OnEquipoChanged(object sender, EventArgs e)
        {
            serialPicker.SelectedItem = null;
            serialPicker.ItemsSource = null; // Limpiar los seriales

            if (clientePicker.SelectedItem is string clienteSeleccionado && 
                ciudadPicker.SelectedItem is string ciudadSeleccionada &&
                equipoPicker.SelectedItem is string equipoSeleccionado &&
                clientesDatos.ContainsKey(clienteSeleccionado))
            {
                var seriales = clientesDatos[clienteSeleccionado]
                    .Where(x => x[0] == ciudadSeleccionada && x[1] == equipoSeleccionado)
                    .Select(x => x[2])
                    .Where(s => !string.IsNullOrEmpty(s)) // Ignorar seriales vacíos
                    .ToList();
                serialPicker.ItemsSource = seriales;

                if (seriales.Count == 1)
                {
                    serialPicker.SelectedItem = seriales[0];
                }
            }
        }

        private void OnGenerarCodigoClicked(object sender, EventArgs e)
        {
            try
            {
                if (ValidarSelecciones())
                {
                    string codigo = GenerarCodigo();
                    codigoGeneradoLabel.Text = codigo;
                }
            }
            catch (Exception ex)
            {
                DisplayAlert("Error", $"Ha ocurrido un error al generar el código: {ex.Message}", "OK");
            }
        }

        private bool ValidarSelecciones()
        {
            if (transportePicker.SelectedItem == null)
            {
                DisplayAlert("Error", "Por favor seleccione un tipo de transporte", "OK");
                return false;
            }

            if (actividadPicker.SelectedItem == null)
            {
                DisplayAlert("Error", "Por favor seleccione una actividad", "OK");
                return false;
            }

            if (clientePicker.SelectedItem == null)
            {
                DisplayAlert("Error", "Por favor seleccione un cliente", "OK");
                return false;
            }

            if (ciudadPicker.SelectedItem == null)
            {
                DisplayAlert("Error", "Por favor seleccione una ciudad", "OK");
                return false;
            }

            if (equipoPicker.SelectedItem == null)
            {
                DisplayAlert("Error", "Por favor seleccione un equipo", "OK");
                return false;
            }

            // Permitir seriales vacíos para casos especiales como MONTRA COLOMBIA SAS
            string clienteSeleccionado = clientePicker.SelectedItem?.ToString() ?? string.Empty;
            string equipoSeleccionado = equipoPicker.SelectedItem?.ToString() ?? string.Empty;
            
            // Si no es un caso especial (como departamentos de MONTRA), verificar serial
            if (!(clienteSeleccionado == "MONTRA COLOMBIA SAS" && 
                 (equipoSeleccionado == "FINANCIERO" || 
                  equipoSeleccionado == "ADMINISTRATIVO" || 
                  equipoSeleccionado == "COMERCIAL" || 
                  equipoSeleccionado == "INGENIERÍA" || 
                  equipoSeleccionado == "PUBLICIDAD" || 
                  equipoSeleccionado == "BIENESTAR" || 
                  equipoSeleccionado == "CAPACITACIÓN" || 
                  equipoSeleccionado == "HERRAMIENTA" || 
                  equipoSeleccionado == "SGSST")))
            {
                if (serialPicker.SelectedItem == null)
                {
                    DisplayAlert("Error", "Por favor seleccione un serial", "OK");
                    return false;
                }
            }

            if (transportePicker.SelectedItem?.ToString() == "TRANSPORTE")
            {
                if (lugarInicialPicker.SelectedItem == null)
                {
                    DisplayAlert("Error", "Por favor seleccione un lugar inicial", "OK");
                    return false;
                }
                
                if (lugarFinalPicker.SelectedItem == null)
                {
                    DisplayAlert("Error", "Por favor seleccione un lugar final", "OK");
                    return false;
                }
            }

            return true;
        }

        private string GenerarCodigo()
        {
            string clienteSeleccionado = clientePicker.SelectedItem?.ToString() ?? string.Empty;
            string ciudadSeleccionada = ciudadPicker.SelectedItem?.ToString() ?? string.Empty;
            string equipoSeleccionado = equipoPicker.SelectedItem?.ToString() ?? string.Empty;
            string serialSeleccionado = serialPicker.SelectedItem?.ToString() ?? string.Empty;
            string transporteSeleccionado = transportePicker.SelectedItem?.ToString() ?? string.Empty;
            string actividadSeleccionada = actividadPicker.SelectedItem?.ToString() ?? string.Empty;

            // Obtener el código del cliente
            string codigoCliente = "CÓDIGO NO ENCONTRADO";
            if (clientesDatos.ContainsKey(clienteSeleccionado))
            {
                var matchingItems = clientesDatos[clienteSeleccionado].Where(x => 
                    x[0] == ciudadSeleccionada && 
                    x[1] == equipoSeleccionado);
                
                // Si hay seriales, filtrar por serial
                if (!string.IsNullOrEmpty(serialSeleccionado))
                {
                    matchingItems = matchingItems.Where(x => x[2] == serialSeleccionado);
                }
                
                var matchingItem = matchingItems.FirstOrDefault();

                if (matchingItem != null)
                {
                    codigoCliente = matchingItem[3];
                }
            }

            // Obtener las abreviaturas
            string transporteAbreviado = conceptosTransporte.GetValueOrDefault(transporteSeleccionado, transporteSeleccionado);
            string actividadAbreviada = conceptosActividad.GetValueOrDefault(actividadSeleccionada, actividadSeleccionada);
            
            // Construir el código
            string codigo = $"({codigoCliente}) {transporteAbreviado} {actividadAbreviada} ";

            // Añadir información de transporte si es necesario
            if (transporteSeleccionado == "TRANSPORTE")
            {
                codigo += $"{lugarInicialPicker.SelectedItem} - {lugarFinalPicker.SelectedItem} ";
            }

            // Añadir serial si existe
            if (!string.IsNullOrEmpty(serialSeleccionado))
            {
                codigo += $"{serialSeleccionado} ";
            }
            
            // Añadir fecha seleccionada en el formato correcto
            DateTime fechaSeleccionada = fechaActividadPicker.Date.Date; // Asegurar que solo se use la fecha, sin tiempo
            
            // Establecer la cultura española
            CultureInfo cultureInfo = new CultureInfo("es-ES");
            
            // Formatear la fecha como "dd MMM" en español y convertir a mayúsculas
            string fechaFormateada = fechaSeleccionada.ToString("dd MMM", cultureInfo).ToUpper();
            
            codigo += fechaFormateada;

            return codigo;
        }

        private void OnCopiarClicked(object sender, EventArgs e)
        {
            if (!string.IsNullOrEmpty(codigoGeneradoLabel.Text) && codigoGeneradoLabel.Text != "Código Generado")
            {
                Clipboard.SetTextAsync(codigoGeneradoLabel.Text);
                DisplayAlert("Copiado", "Código copiado al portapapeles", "OK");
            }
            else
            {
                DisplayAlert("Error", "No hay código para copiar", "OK");
            }
        }

        private void OnLimpiarClicked(object sender, EventArgs e)
        {
            transportePicker.SelectedItem = null;
            actividadPicker.SelectedItem = null;
            clientePicker.SelectedItem = null;
            ciudadPicker.ItemsSource = null;
            equipoPicker.ItemsSource = null;
            serialPicker.ItemsSource = null;
            lugarInicialPicker.SelectedItem = null;
            lugarFinalPicker.SelectedItem = null;
            fechaActividadPicker.Date = DateTime.Now.Date; // Solo la fecha, sin tiempo
            codigoGeneradoLabel.Text = "Código Generado";
        }
    }
}