from flask import Flask, render_template, request, redirect, url_for
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

# Email configuration (sender email and normal password)
EMAIL_ADDRESS = 'Admin@gmail.com'  # Replace with the sender's Gmail email
EMAIL_PASSWORD = '100'  # Replace with the sender's Gmail password

@app.route('/')
def index():
    return render_template('index.html')  # Render the HTML form

@app.route('/submit', methods=['POST'])
def submit():
    # Get the name and prayer request from the form
    name = request.form['name']
    prayer_request = request.form['prayer_request']

    # Combine name and prayer request into one message
    full_message = f"Prayer request from {name}:\n\n{prayer_request}"

    # Prepare the email
    msg = MIMEText(full_message)
    msg['Subject'] = 'New Prayer Request'
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = 'lawrence63@gmail.com'  # The recipient email

    # Send the email
    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()  # Secure the connection
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)  # Log in using the regular password
            server.send_message(msg)  # Send the email
    except Exception as e:
        print(f"Error: {e}")
        return "There was an error sending your prayer request. Please try again."

    return redirect(url_for('index'))  # Redirect back to the form after submission

if __name__ == '__main__':
    app.run(debug=True)
