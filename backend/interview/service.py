from fastapi import FastAPI, HTTPException
import pandas as pd
import os
import glob

# Setup directory for company data
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data", "company-questions")


def get_questions(company: str):
    # Search for company directory in data
    company_dir = os.path.join(DATA_DIR, company)

    if not os.path.exists(company_dir):
        raise HTTPException(404, "Company not found")

    # Obtain list of csv files in company directory using glob
    csv_files = glob.glob(os.path.join(company_dir, "*.csv"))

    if not csv_files:
        raise HTTPException(
            status_code=404, detail="No CSV files found in company directory"
        )

    target_file = csv_files[0]

    try:
        # Open 'all.csv' file and create dataframe with pandas
        df = pd.read_csv(target_file)

        # Convert dataframe to JSON and return
        return df.to_dict(orient="records")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
