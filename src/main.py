import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import base64

# Replace this with the URL of the page containing the images
url = 'https://ichinomiyamotors.jp/'

# Specify a directory to save the images
save_directory = 'images'

# Create the directory if it doesn't exist
os.makedirs(save_directory, exist_ok=True)

# Configure Chrome options
chrome_options = Options()
# Add other options as needed
chrome_options.add_argument('--disable-gpu')  # Disable GPU acceleration to prevent some issues

# Use Selenium to load the webpage with JavaScript execution
driver = webdriver.Chrome(options=chrome_options)
driver.get(url)

# Wait for JavaScript to fully load (you can adjust the timeout as needed)
wait = WebDriverWait(driver, 100)
wait.until(EC.presence_of_element_located((By.XPATH, '//img[@class="w-full h-full rounded-t object-cover"]')))

# Wait for all available images to load
expected_image_count = len(driver.find_elements(By.XPATH, '//img[@class="w-full h-full rounded-t object-cover"]'))
print(expected_image_count)
wait.until(EC.presence_of_all_elements_located((By.XPATH, f'//img[@class="w-full h-full rounded-t object-cover"][{expected_image_count}]')))

# Find all images with a specific class name
image_tags = driver.find_elements(By.XPATH, '//img[@class="w-full h-full rounded-t object-cover"]')

# Download images using Selenium
for index, image_tag in enumerate(image_tags):
    # Get the image source
    image_src = image_tag.get_attribute('src')
    
    # Download the image
    if image_src and image_src.startswith('blob:'):
        # Fetch the image data as base64 using JavaScript
        image_data = driver.execute_script(f"return fetch('{image_src}').then(response => response.blob()).then(blob => new Promise((resolve, reject) => {{const reader = new FileReader(); reader.onloadend = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(blob);}}));")
        
        # Remove the prefix added by the JavaScript
        image_data = image_data.split(',')[1]
        
        img_bytes = base64.b64decode(image_data)
        
        # Generate a filename based on the index
        filename = f'image_{index+1}.jpg'
        # Specify the full path to save the image
        save_path = os.path.join(save_directory, filename)
        
        # Save the image
        with open(save_path, 'wb') as file:
            file.write(img_bytes)
        
        print(f"Image saved to: {save_path}")

print("Images downloaded successfully.")

# Close the Selenium webdriver
driver.quit()
