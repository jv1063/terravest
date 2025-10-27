# 🚀 GitHub Setup Guide for GeoJSON Automation

This guide will help you set up your property map website with GitHub for easy updates through the GitHub app.

## 📋 What You'll Get

- ✅ **Easy updates** through GitHub app (copy-paste workflow)
- ✅ **Automatic deployment** to GitHub Pages
- ✅ **Web interface** for validating and generating files
- ✅ **Automatic cache busting** to ensure updates are visible
- ✅ **Backup system** with version control

## 🛠️ Setup Steps

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and create a new repository
2. **Name it** something like `property-map` or `terravest-map`
3. **Make it public** (required for free GitHub Pages)
4. **Initialize** with README

### Step 2: Upload Your Files

Upload these files to your GitHub repository:

```
your-repo/
├── map.html                    # Your main website
├── data/
│   └── properties.geojson      # Property data
├── assets/                     # Your existing assets folder
├── .github/
│   └── workflows/
│       └── update-geojson.yml  # Automation workflow
├── update-geojson.html         # Web interface for updates
└── README.md                   # Documentation
```

### Step 3: Enable GitHub Pages

1. **Go to** your repository settings
2. **Scroll down** to "Pages" section
3. **Select source**: "Deploy from a branch"
4. **Select branch**: "gh-pages"
5. **Click Save**

### Step 4: Enable GitHub Actions

1. **Go to** your repository "Actions" tab
2. **Click** "I understand my workflows, go ahead and enable them"
3. **The workflow** will run automatically when you update files

## 🔄 Your New Workflow

### Method 1: Using the Web Interface (Recommended)

1. **Open** `update-geojson.html` in your browser
2. **Paste** your new property polygon data
3. **Click** "Validate & Preview" to check your data
4. **Click** "Generate Updated Files" to create the content
5. **Copy** the generated content
6. **Paste** it into the corresponding files in GitHub
7. **Commit** and push your changes
8. **Wait** for automatic deployment (2-3 minutes)

### Method 2: Direct File Editing

1. **Open** `data/properties.geojson` in GitHub
2. **Click** the edit button (pencil icon)
3. **Paste** your new GeoJSON data
4. **Commit** your changes
5. **Wait** for automatic deployment

## 📱 Using GitHub Mobile App

1. **Download** GitHub mobile app
2. **Navigate** to your repository
3. **Open** `data/properties.geojson`
4. **Tap** the edit button
5. **Paste** your new data
6. **Commit** changes
7. **Your website** will update automatically!

## 🌐 Web Interface Features

The `update-geojson.html` file provides:

- ✅ **Real-time validation** of your GeoJSON data
- ✅ **Preview** of property titles and feature count
- ✅ **Automatic file generation** for easy copying
- ✅ **One-click copy** buttons for each section
- ✅ **Step-by-step instructions** for GitHub updates

## 🔧 How the Automation Works

1. **You update** `data/properties.geojson` in GitHub
2. **GitHub Actions** automatically runs
3. **The workflow** validates your GeoJSON
4. **Updates** the embedded data in `map.html`
5. **Updates** the version number for cache busting
6. **Deploys** everything to GitHub Pages
7. **Your website** is updated automatically!

## 📊 Example Workflow

### When you add new properties:

1. **Copy** your property polygon data from your GIS software
2. **Open** `update-geojson.html` in your browser
3. **Paste** the data and validate it
4. **Generate** the updated files
5. **Copy** the generated content
6. **Go to GitHub** and update the files
7. **Commit** your changes
8. **Wait 2-3 minutes** for automatic deployment
9. **Visit** your GitHub Pages site to see the changes

## 🎯 Benefits

- ✅ **No local setup** required
- ✅ **Works on any device** with GitHub app
- ✅ **Automatic validation** prevents errors
- ✅ **Version control** keeps track of all changes
- ✅ **Automatic deployment** to live website
- ✅ **Cache busting** ensures updates are visible
- ✅ **Backup system** with full history

## 🔍 Troubleshooting

### Problem: Website not updating
**Solution**: 
1. Check GitHub Actions tab for errors
2. Wait 2-3 minutes for deployment
3. Clear browser cache (Ctrl+Shift+R)

### Problem: Invalid GeoJSON
**Solution**: 
1. Use the web interface to validate your data
2. Check for missing commas, brackets, or quotes
3. Ensure it's valid JSON format

### Problem: GitHub Actions not running
**Solution**: 
1. Check that the workflow file is in `.github/workflows/`
2. Make sure the file has `.yml` extension
3. Check repository settings for Actions permissions

## 📞 Support

If you encounter any issues:

1. **Check** the GitHub Actions tab for error messages
2. **Validate** your GeoJSON using the web interface
3. **Check** that all files are in the correct locations
4. **Verify** GitHub Pages is enabled and working

## 🎉 Success!

Once set up, updating your property map is as simple as:

1. **Copy** your property data
2. **Paste** it in GitHub
3. **Commit** changes
4. **Done!** Your website updates automatically

No more manual file management, no more cache issues, no more forgetting to update embedded data - everything is automated! 🚀
