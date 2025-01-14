from PIL import Image

def resize_image_to_1500x1000(input_path, output_path):
    """
    Resize an image to 1500x1000 pixels.

    :param input_path: Path to the input image file.
    :param output_path: Path to save the resized image.
    """
    try:
        # Open the input image
        with Image.open(input_path) as img:
            # Resize the image to 1500x1000
            resized_img = img.resize((1500, 1000))
            
            # Save the resized image
            resized_img.save(output_path)
            print(f"Image resized and saved to {output_path}")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage:
# Replace 'input.jpg' with the path to your image, and 'output.jpg' with the desired output path
resize_image_to_1500x1000('./utils/WhatsApp Image 2025-01-10 at 16.11.22.jpeg', 'WhatsApp Image 2025-01-10 at 16.11.22.jpeg')
