# PT Tablet Follow-up System - Google Sheets Setup Guide

## 📋 What You'll Get:
✅ All patient data saved to Google Sheets automatically
✅ Access from any computer/device
✅ Share with your team
✅ Automatic backup by Google
✅ Export to Excel anytime

---

## 🚀 SETUP STEPS (10 Minutes):

### **Step 1: Create a New Google Sheet**

1. Go to: https://sheets.google.com
2. Click **"+ Blank"** to create a new spreadsheet
3. Name it: **"PT Tablet Follow-up Data"**
4. Keep this tab open

---

### **Step 2: Open Apps Script Editor**

1. In your Google Sheet, click: **Extensions** → **Apps Script**
2. A new tab will open with a code editor
3. Delete any existing code in the editor
4. Keep this tab open

---

### **Step 3: Paste the Google Apps Script Code**

1. Open the file: **Code.gs** (included with this app)
2. **Copy ALL the code** from Code.gs
3. Go back to the Apps Script editor tab
4. **Paste** the code into the editor
5. Click the **💾 Save** icon (or Ctrl+S)
6. Name your project: **"PT Follow-up API"**

---

### **Step 4: Deploy as Web App**

1. In the Apps Script editor, click: **Deploy** → **New deployment**
2. Click the **⚙️ gear icon** next to "Select type"
3. Choose: **Web app**
4. Fill in these settings:
   - **Description**: "PT Follow-up API v1"
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone**
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to PT Follow-up API (unsafe)**
9. Click **Allow**
10. **IMPORTANT**: Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/...`)
11. Save this URL somewhere safe!

---

### **Step 5: Connect Your App to Google Sheets**

1. Open the **pt-visit-tracker.html** file in your browser
2. You'll see a setup popup asking for the Google Script URL
3. **Paste the Web App URL** you copied in Step 4
4. Click **"Connect to Google Sheets"**
5. Done! ✅

---

## ✅ TEST IT:

1. Add a test patient (e.g., `2026/TEST/0001`)
2. Go to your Google Sheet
3. You should see a new sheet called **"PT_Data"**
4. Your patient data should appear there!

---

## 🔄 HOW IT WORKS:

- **Add a patient** → Saved to Google Sheets instantly
- **Tick a patient** → Status updated in Google Sheets
- **Delete entry** → Removed from Google Sheets
- **Local backup** → Also saves to browser as backup

---

## 👥 SHARING WITH YOUR TEAM:

1. Open your Google Sheet
2. Click the **Share** button (top right)
3. Add team members' email addresses
4. Set permission: **Editor** (so they can view/edit)
5. Send them the **pt-visit-tracker.html** file
6. They paste the same Web App URL in setup
7. Now everyone sees the same data!

---

## 📱 ACCESS FROM PHONE/TABLET:

1. Copy the **pt-visit-tracker.html** file to Google Drive
2. Open it on your phone/tablet browser
3. Enter the same Web App URL
4. Works perfectly on mobile!

---

## 🔧 TROUBLESHOOTING:

### **Problem: "Error connecting to Google Sheets"**
- Check your internet connection
- Make sure the Web App URL is correct
- Make sure you clicked "Allow" during authorization

### **Problem: "Data not showing"**
- Wait 2-3 seconds for Google to sync
- Refresh the page
- Check your Google Sheet directly

### **Problem: "Can't find my Web App URL"**
- Go to Apps Script editor
- Click: **Deploy** → **Manage deployments**
- Copy the Web App URL from there

---

## 🆘 NEED HELP?

**Check your Google Sheet**: Open it and look at the "PT_Data" sheet tab. This is where all your data is stored.

**Re-deploy if needed**: If something goes wrong, go to Apps Script → Deploy → Manage deployments → Click ⋮ → Edit → Click Deploy

---

## 🎉 YOU'RE ALL SET!

Your PT Tablet Follow-up system is now:
- ✅ Saving to Google Sheets
- ✅ Accessible from anywhere
- ✅ Shareable with team
- ✅ Automatically backed up

Enjoy! 🚀
