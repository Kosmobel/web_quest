from PIL import Image
import os

def split_image(image_path, output_folder, rows, cols):
    # Открываем изображение
    img = Image.open(image_path)
    
    # Получаем размеры изображения
    img_width, img_height = img.size
    
    # Рассчитываем размеры фрагментов
    fragment_width = img_width // cols
    fragment_height = img_height // rows

    # Создаем выходную папку, если она не существует
    os.makedirs(output_folder, exist_ok=True)

    # Разбиваем изображение на фрагменты
    for row in range(rows):
        for col in range(cols):
            left = col * fragment_width
            upper = row * fragment_height
            right = left + fragment_width
            lower = upper + fragment_height
            
            # Обрезаем фрагмент
            fragment = img.crop((left, upper, right, lower))
            fragment.save(os.path.join(output_folder, f'key-fragment{row * cols + col + 1}.jpg'))

# Путь к изображению
image_path = 'key.jpg'  # Укажите путь к вашему изображению
output_folder = 'fragments'
rows = 4  # Количество строк
cols = 4  # Количество столбцов

split_image(image_path, output_folder, rows, cols)
