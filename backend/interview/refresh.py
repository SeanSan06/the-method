import os
import subprocess
from dotenv import load_dotenv

# Load Environment Variables
load_dotenv()

# Get Data URL
DATA_URL = os.getenv('DATA_URL')

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'data')

def refresh_data():
    # Check if repo exists
    if not DATA_URL: 
        print("DATA_URL not found...")
        return

    # Check if data exists by checking .git folder
    git_folder = os.path.join(DATA_DIR, '.git')


    if os.path.exists(git_folder): 
        print(f"Updating DataSet...")
        try:
            # Update existing dataset using git command (pull)
            subprocess.run(['git', '-C', DATA_DIR, 'pull'], check=True)
            print("Data updated successfully")
        except subprocess.CalledProcessError as e:
            print(f"Unable to update data: {e}")

    else: 
        print(f"Obtaining DataSet...")
        try:
            # Obtain dataset using git command (clone) into DATA_DIR
            subprocess.run(['git', 'clone', DATA_URL, DATA_DIR], check=True)
            print("Data successfully obtained")
        except subprocess.CalledProcessError as e:
            print(f"Unable to obtain data: {e}")

if __name__ == '__main__':
    refresh_data()