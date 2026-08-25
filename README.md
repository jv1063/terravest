# 🗺️ Terravest Property Map

Interactive property map displaying real estate data with live external GeoJSON loading.

## 🚀 Live Website

Your property map loads data directly from `data/properties.geojson` and updates automatically when you modify the file.

## 📝 How to Update Properties

### Simple Method (Recommended):
1. **Open** `data/properties.geojson` in GitHub
2. **Click** the edit button (pencil icon)
3. **Paste** your new property polygon data
4. **Commit** your changes
5. **Done!** Your website updates automatically

### Using Web Interface:
1. **Open** `update-geojson.html` in your browser
2. **Paste** your GeoJSON data and validate it
3. **Generate** the updated files
4. **Copy** the generated content to GitHub
5. **Commit** your changes

## 🔧 Technical Details

- **Frontend**: HTML5, CSS3, JavaScript, Leaflet.js
- **Data**: Live external GeoJSON loading (no embedded data)
- **Deployment**: GitHub Actions + GitHub Pages
- **Security**: Password protected (passcode: 22121998)

## 📁 Project Structure

```
project_369/
├── index.html                  # Main website (password protected)
├── data/
│   └── properties.geojson      # Property data (edit this file)
├── assets/                     # Images and videos
├── .github/workflows/
│   └── update-geojson.yml      # Automation workflow
├── update-geojson.html         # Web interface for updates
└── README.md                   # This file
```

## 🎯 Features

- ✅ Interactive map with satellite imagery
- ✅ Live external GeoJSON loading
- ✅ Property polygons with detailed information
- ✅ WhatsApp integration for inquiries
- ✅ Google Maps integration
- ✅ Mobile-responsive design
- ✅ Password protection
- ✅ Automatic updates via GitHub Actions
- ✅ Cache busting for instant updates

## 🔐 Access

- **Passcode**: `22121998`
- **Login required** to view the map
- **Data updates** automatically when you modify `data/properties.geojson`

## 📞 Support

For technical support or questions, contact the development team.

---

**Last Updated**: Property data updates automatically when you modify `data/properties.geojson`