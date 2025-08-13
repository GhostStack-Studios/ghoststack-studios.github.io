### **Step 1: Installing Unity Hub and Unity 6**

1. **Download Unity Hub:**

    * Go to the official [Unity Hub download page](https://unity3d.com/get-unity/download) and click the **"Download Unity Hub"** button.
    * Unity Hub is an application that will help you manage your Unity installations, projects, and assets.

2. **Install Unity Hub:**

    * Once the Unity Hub installer is downloaded, run the installer and follow the instructions to complete the installation.
    * When prompted, sign in with your Unity account (or create one if you don’t have one yet).

3. **Install Unity 6:**

    * Open Unity Hub and go to the **"Installs"** tab on the left side.
    * Click the **"Add"** button to install a new version of Unity.
    * In the popup, choose **Unity 6.x.x** (preferably the latest stable version in the 6.x series) from the list of versions. If it’s not showing up, you may need to click **"Download Archive"** and choose Unity 6 from there.
    * **Make sure you install Unity with the **Windows Build Support** module selected**. This is important because it’s the only platform you’re targeting.

4. **Select Modules:**

    * In the same installer, ensure that **Windows Build Support** is selected.
    * You can leave the other modules unchecked for now to keep the installation lightweight.

5. **Complete Installation:**

    * Click **"Next"** and then **"Install"**. Unity Hub will download and install Unity 6 with the selected modules.

6. **Verify Installation:**

    * Once the installation is complete, you can verify it by opening Unity Hub, going to the **"Installs"** tab, and confirming that Unity 6 is listed there.

---

### **Step 2: Installing Unity Modules for Windows Build Support**

1. **Open Unity Hub:**

    * If you haven’t already, open Unity Hub.

2. **Go to the "Installs" Tab:**

    * In Unity Hub, click on the **"Installs"** tab in the left sidebar.

3. **Add Modules to Unity Installation:**

    * In the **Installs** tab, you should see the Unity 6 version that you installed earlier.
    * Click the three dots (ellipses) next to the Unity version and select **"Add Modules"**.

4. **Select "Windows Build Support":**

    * In the list of available modules, check the **"Windows Build Support (IL2CPP)"** option. This is essential because you’re building the game for Windows.
    * You can leave other modules unchecked unless you plan to build for other platforms later.

5. **Click "Done":**

    * After selecting the Windows Build Support module, click **"Done"** to install it. Unity Hub will automatically download and install the necessary files.

6. **Wait for Installation:**

    * Wait for the installation to complete. It should only take a few minutes.

7. **Verify Installation:**

    * Once the module is installed, you can check by going to **File** > **Build Settings** in Unity. Under the **Platform** section, you should see **PC, Mac & Linux Standalone** with **Windows** as an option.
---

### **Step 3: Creating a GitHub Account**

1. **Go to GitHub Website:**

    * Open your web browser and go to [GitHub's website](https://github.com/).

2. **Sign Up for a New Account:**

    * Click the **"Sign up"** button at the top-right of the page.
    * You’ll be prompted to enter the following:

        * **Username:** Choose a unique username (you’ll use this to log in and identify your account).
        * **Email Address:** Provide a valid email address that you have access to.
        * **Password:** Choose a strong password.

3. **Verify Your Email Address:**

    * GitHub will send a verification email to the address you provided.
    * Check your inbox for an email from GitHub and click the verification link to confirm your email address.

4. **Choose a Plan:**

    * GitHub offers both **free** and **paid plans**. For this tutorial, the free plan is sufficient.
    * Select the **"Free"** plan and proceed.

5. **Complete the Setup:**

    * After confirming your email and selecting your plan, follow the on-screen instructions to finish the setup.
    * GitHub might ask a few questions about your experience with coding and your preferences, but these are optional.

6. **Explore GitHub:**

    * Once your account is created, you’ll be taken to the GitHub dashboard.
    * You can now start using GitHub to create repositories, manage your projects, and collaborate with others.

---

### **Step 4: Setting Up Git and GitHub on Your Machine**

1. **Download and Install Git:**

    * Visit the official [Git download page](https://git-scm.com/downloads).
    * Git will automatically detect your operating system (Windows, in your case) and provide the appropriate download link.
    * Click the download link to start the process, and then run the installer once it’s complete.

2. **Configure Git:**

    * After installing Git, you need to configure it with your GitHub account.

    * Open **Git Bash** (which was installed along with Git) from the Start menu or search bar.

    * Set your username and email for Git:

        * Run the following commands in Git Bash, replacing the placeholders with your actual information:

          ```
          git config --global user.name "YourGitHubUsername"
          git config --global user.email "your-email@example.com"
          ```
        * This step associates your Git commits with your GitHub account.

3. **Verify Git Installation:**

    * To verify that Git is installed correctly, run:

      ```
      git --version
      ```
    * If everything is set up correctly, you should see a Git version number.

4. **Generate an SSH Key (Optional but Recommended for Secure Access):**

    * In Git Bash, run the following command to generate a new SSH key:

      ```
      ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
      ```
    * Press **Enter** to accept the default file location, then enter a passphrase (or leave it empty for no passphrase).
    * This will generate an SSH key on your machine.

5. **Add SSH Key to GitHub:**

    * First, you need to copy the SSH public key. Run the following command in Git Bash:

      ```
      cat ~/.ssh/id_rsa.pub
      ```

    * This will display the SSH key. Copy the entire key to your clipboard.

    * Go to GitHub and sign in to your account.

    * In the top-right corner of GitHub, click on your profile picture, and go to **Settings**.

    * In the left sidebar, click **SSH and GPG keys**, then click the **New SSH key** button.

    * Give your key a name (e.g., "My PC"), and paste the SSH key into the field.

    * Click **Add SSH key**.

6. **Test SSH Connection:**

    * To test if everything is working correctly, run the following command in Git Bash:

      ```
      ssh -T git@github.com
      ```
    * If you’re prompted to continue connecting, type `yes`. If successful, you’ll see a message like this:

      ```
      Hi YourGitHubUsername! You've successfully authenticated, but GitHub does not provide shell access.
      ```
---

