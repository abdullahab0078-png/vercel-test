# 🚀 Client Ko Link Dene Ka Sabse Aasan Tarika

## Vercel (5 Minutes Mein Live!) ⭐

### Step 1: GitHub Pe Upload
```bash
# Agar git nahi hai, pehle install karein
git init
git add .
git commit -m "PDF Tools Website"
```

**GitHub pe repo banayein:**
1. https://github.com pe jayein
2. "New repository" click karein
3. Repo name: `pdf-tools-website`
4. "Create repository" click karein
5. Commands copy karein aur run karein:
```bash
git remote add origin https://github.com/YOUR_USERNAME/pdf-tools-website.git
git branch -M main
git push -u origin main
```

### Step 2: Vercel Pe Deploy
1. **https://vercel.com** pe jayein
2. "Sign Up" karein (GitHub account se)
3. "Add New..." > "Project" click karein
4. Apna GitHub repo select karein (`pdf-tools-website`)
5. **Settings:**
   - Framework Preset: "Other"
   - Build Command: (khali chhod dein)
   - Output Directory: `.`
   - Install Command: `npm install`
6. "Deploy" button click karein
7. **2-3 minutes wait karein**

### Step 3: Link Mil Jayega! 🎉
- Example: `https://pdf-tools-website.vercel.app`
- Ye link **permanent** hai
- Client ko ye link de sakte hain
- Har baar code update karne pe automatically deploy ho jayega!

---

## Alternative: Netlify

1. **https://netlify.com** pe jayein
2. "Sign up" karein
3. "Add new site" > "Import an existing project"
4. GitHub connect karein
5. Repo select karein
6. Deploy!

Link: `https://your-site.netlify.app`

---

## Temporary Link (Testing Ke Liye): Ngrok

```bash
# 1. Ngrok download karein: https://ngrok.com/download
# 2. Extract karein
# 3. Terminal mein:
ngrok http 3000

# 4. Link mil jayega (example: https://abc123.ngrok.io)
# Note: Free version mein har baar restart pe link change hota hai
```

---

## Same WiFi Pe (Local Network)

```bash
# 1. Server start karein
npm start

# 2. IP address find karein
# Windows: ipconfig (Command Prompt)
# Mac: ifconfig (Terminal)

# 3. Client ko link dein
http://YOUR_IP:3000
# Example: http://192.168.1.5:3000
```

---

## ✅ Best Option: Vercel
- ✅ Free
- ✅ Permanent link
- ✅ Auto-deploy
- ✅ Fast
- ✅ Easy setup

**5 minutes mein client ko link de sakte hain!** 🎯

