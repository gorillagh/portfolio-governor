# Firebase Setup Guide for Phase 3

This guide will help you set up Firebase for your portfolio's backend services including Firestore, Analytics, and Authentication.

## 🚀 Quick Setup Checklist

- [ ] Create Firebase project
- [ ] Enable Firestore Database
- [ ] Configure Firebase Authentication (optional)
- [ ] Set up Firebase Storage
- [ ] Enable Firebase Analytics
- [ ] Configure environment variables
- [ ] Set up Firestore security rules
- [ ] Import initial data
- [ ] Test the configuration

## 1. Create Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name: `albert-nartey-portfolio`
4. **Disable Google Analytics** for now (we'll add it later)
5. Click "Create project"

## 2. Enable Firestore Database

1. In the Firebase console, go to **Firestore Database**
2. Click "Create database"
3. Select **"Start in test mode"** (we'll configure security rules later)
4. Choose your preferred location (closest to your users)
5. Click "Done"

## 3. Set up Firebase Web App

1. In Project Overview, click the **Web** icon `</>`
2. Register app with nickname: `portfolio-web`
3. **Don't** check "Also set up Firebase Hosting" (we're using Vercel)
4. Click "Register app"
5. **Copy the configuration object** - you'll need it for environment variables

Your config will look like this:
```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
  measurementId: "G-ABCDEF123" // This will be added when we enable Analytics
};
```

## 4. Enable Firebase Storage

1. Go to **Storage** in the Firebase console
2. Click "Get started"
3. Keep default security rules for now
4. Choose the same location as your Firestore database
5. Click "Done"

## 5. Configure Environment Variables

Create a `.env.local` file in your project root:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456

# Resend Email Configuration (you already have this)
RESEND_API_KEY=re_your_resend_api_key
RESEND_FROM_EMAIL=portfolio@yourdomain.com
CONTACT_EMAIL=your@email.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://albertnartey.com
NEXT_PUBLIC_SITE_NAME=Albert Nartey Portfolio

# Admin Configuration (generate a secure random string)
ADMIN_API_KEY=your_secure_random_admin_key_here
```

## 6. Set up Firestore Security Rules

Go to **Firestore Database > Rules** and replace the default rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read access for portfolio data
    match /projects/{document} {
      allow read: if true;
      allow write: if request.auth != null; // Only authenticated users can write
    }
    
    match /skills/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /testimonials/{document} {
      allow read: if resource.data.approved == true; // Only approved testimonials
      allow write: if request.auth != null;
    }
    
    // Contact inquiries - write only for form submissions
    match /contact_inquiries/{document} {
      allow create: if true; // Anyone can submit contact forms
      allow read, update, delete: if request.auth != null; // Only admin can read/manage
    }
    
    // Analytics events - write only
    match /analytics_events/{document} {
      allow create: if true; // Anyone can create analytics events
      allow read: if request.auth != null; // Only admin can read
    }
    
    // Blog posts (for future use)
    match /blog_posts/{document} {
      allow read: if resource.data.published == true; // Only published posts
      allow write: if request.auth != null; // Only admin can write
    }
  }
}
```

Click **"Publish"** to save the rules.

## 7. Enable Firebase Analytics (Optional)

1. Go to **Analytics** in the Firebase console
2. Click "Enable Google Analytics"
3. Choose or create a Google Analytics account
4. Enable analytics and get your Measurement ID
5. Add the Measurement ID to your environment variables:

```env
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-ABCDEF123
NEXT_PUBLIC_GA_ID=G-ABCDEF123
```

## 8. Import Initial Data

Run the data migration script to populate your Firebase database:

```bash
# Make sure you have the environment variables set up first
npx tsx lib/migration/migrateData.ts
```

This will import:
- Your existing projects from `constants/projects.ts`
- Your skills from `constants/skills.ts`
- Sample testimonials

## 9. Test Firebase Connection

1. Start your development server:
```bash
pnpm dev
```

2. Open your browser's developer console
3. Navigate to your portfolio
4. Check for any Firebase errors in the console
5. Try submitting a contact form to test the API

## 10. Set up Firebase Emulator (Development)

For local development, you can use Firebase emulators:

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project:
```bash
firebase init
```
Select:
- Firestore
- Storage
- Emulators

4. Start emulators:
```bash
firebase emulators:start
```

## 🔧 Troubleshooting

### Common Issues

**1. "Permission denied" errors**
- Check your Firestore security rules
- Make sure you're not trying to write data that requires authentication

**2. "Firebase config not found"**
- Verify all environment variables are set correctly
- Restart your development server after adding environment variables

**3. "Network error" when connecting to Firebase**
- Check your internet connection
- Verify your Firebase project is active
- Check if you have any ad blockers or firewalls blocking Firebase

**4. Contact form not working**
- Check that your Resend API key is correct
- Verify the email addresses in your environment variables
- Check the browser console for API errors

### Verification Steps

✅ **Firestore Connection**: Go to Firestore console and see if collections are created
✅ **Contact Form**: Submit a test inquiry and check if it appears in the `contact_inquiries` collection
✅ **Analytics**: Check if events appear in the `analytics_events` collection
✅ **Real-time Updates**: Try liking a project and see if the count updates in real-time

## 🚀 Next Steps

After setting up Firebase:

1. **Customize the data models** to match your specific needs
2. **Add authentication** if you want an admin panel
3. **Set up monitoring** with Firebase Performance Monitoring
4. **Configure email templates** with your branding
5. **Test performance** and optimize query patterns

## 📚 Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Query Guide](https://firebase.google.com/docs/firestore/query-data/queries)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)
- [Next.js Firebase Integration](https://firebase.google.com/docs/web/setup#available-libraries)

## 🔒 Security Best Practices

1. **Never commit** `.env.local` to version control
2. **Use specific security rules** instead of allowing all access
3. **Regularly review** your Firebase usage and costs
4. **Enable quotas** to prevent unexpected charges
5. **Use different projects** for development and production

Your Firebase setup is now complete! 🎉