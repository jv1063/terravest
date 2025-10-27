# 🗺️ Terravest Property Map

Interactive property map displaying real estate data with automated updates.

## 🚀 Live Website

Your property map is automatically deployed to GitHub Pages and updates whenever you modify the `data/properties.geojson` file.

## 📝 How to Update Properties

### Simple Method (Recommended):
1. **Open** `data/properties.geojson` in GitHub
2. **Click** the edit button (pencil icon)
3. **Paste** your new property polygon data
4. **Commit** your changes
5. **Done!** Your website updates automatically in 2-3 minutes

### Using Web Interface:
1. **Open** `update-geojson.html` in your browser
2. **Paste** your GeoJSON data and validate it
3. **Generate** the updated files
4. **Copy** the generated content to GitHub
5. **Commit** your changes

## 🔧 Technical Details

- **Frontend**: HTML5, CSS3, JavaScript, Leaflet.js
- **Data**: GeoJSON format
- **Deployment**: GitHub Actions + GitHub Pages
- **Automation**: Automatic cache busting and embedded data updates

## 📁 Project Structure

```
├── map.html                    # Main website
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
- ✅ Property polygons with detailed information
- ✅ WhatsApp integration for inquiries
- ✅ Google Maps integration
- ✅ Mobile-responsive design
- ✅ Automatic updates via GitHub Actions
- ✅ Cache busting for instant updates

## 📞 Support

For technical support or questions, contact the development team.

---

**Last Updated**: Property data updates automatically when you modify `data/properties.geojson`