"""
Generates on-brand placeholder JPEGs for the KiSS project into public/images/.

Usage:
    pip install Pillow
    python generate_placeholders.py

Run this from the root of your kiss project (where public/images/ lives).
"""
import os
from PIL import Image, ImageDraw, ImageFont

OUT_DIR = "public/images"
os.makedirs(OUT_DIR, exist_ok=True)

PALETTE = {
    "ivory": (248, 245, 239),
    "stone": (245, 241, 234),
    "charcoal": (43, 43, 43),
    "navy": (27, 42, 65),
    "gold": (176, 141, 87),
    "sage": (107, 122, 94),
}


def get_font(size):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
        "/System/Library/Fonts/Supplemental/Georgia Bold.ttf",
        "/System/Library/Fonts/Supplemental/Georgia.ttf",
        "C:\\Windows\\Fonts\\georgiab.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def make_placeholder(filename, width, height, label, sublabel="", accent="gold", bg="ivory"):
    img = Image.new("RGB", (width, height), PALETTE[bg])
    draw = ImageDraw.Draw(img)

    border_color = PALETTE[accent]
    border_w = max(3, width // 200)
    draw.rectangle(
        [border_w, border_w, width - border_w - 1, height - border_w - 1],
        outline=border_color,
        width=border_w,
    )

    step = max(40, width // 20)
    line_color = PALETTE["stone"] if bg == "ivory" else PALETTE["charcoal"]
    for x in range(-height, width, step):
        draw.line([(x, 0), (x + height, height)], fill=line_color, width=1)

    title_font = get_font(max(20, width // 24))
    sub_font = get_font(max(13, width // 48))

    bbox = draw.textbbox((0, 0), label, font=title_font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    tx, ty = (width - tw) / 2, (height - th) / 2 - (10 if sublabel else 0)
    text_color = PALETTE["navy"] if bg != "navy" else PALETTE["ivory"]
    draw.text((tx, ty), label, fill=text_color, font=title_font)

    if sublabel:
        bbox2 = draw.textbbox((0, 0), sublabel, font=sub_font)
        sw = bbox2[2] - bbox2[0]
        draw.text(((width - sw) / 2, ty + th + 14), sublabel, fill=PALETTE[accent], font=sub_font)

    path = os.path.join(OUT_DIR, filename)
    img.save(path, "JPEG", quality=82)
    print(f"Created {path}")


SPECS = [
    ("hero-wedding.jpg", 1600, 900, "KiSS", "Kept in Stockholm Style", "gold", "navy"),
    ("founder-portrait.jpg", 700, 875, "Founder Portrait", "About KiSS", "gold", "ivory"),
    ("wedding-castle-01.jpg", 700, 875, "Sofia & Daniel", "Skokloster Castle", "gold", "ivory"),
    ("wedding-castle-02.jpg", 700, 875, "Anna & Johan", "Tullgarn Palace", "gold", "ivory"),
    ("wedding-countryside-01.jpg", 700, 875, "Elin & Marcus", "Sörmland Countryside", "sage", "ivory"),
    ("wedding-waterfront-01.jpg", 700, 875, "Noor & Erik", "Djurgården Waterfront", "sage", "ivory"),
    ("wedding-waterfront-02.jpg", 700, 875, "Sara & Viktor", "Lake Mälaren", "sage", "ivory"),
    ("wedding-city-01.jpg", 700, 875, "Lina & Oscar", "Gamla Stan, Stockholm", "gold", "ivory"),
    ("corporate-conference-01.jpg", 700, 875, "Nordic Tech Summit", "Corporate Conference", "navy", "stone"),
    ("corporate-gala-01.jpg", 700, 875, "Annual Partner Gala", "Grand Hôtel Stockholm", "navy", "stone"),
    ("student-fest-01.jpg", 700, 875, "KTH Graduation Ball", "Student Fest", "sage", "stone"),
    ("ceremony-01.jpg", 700, 875, "Linnéa's Confirmation", "Ceremony", "gold", "stone"),
    ("birthday-01.jpg", 700, 875, "Erik's 60th Birthday", "Birthday Celebration", "sage", "stone"),
    ("venue-skokloster.jpg", 700, 525, "Skokloster Castle", "Uppland", "gold", "stone"),
    ("venue-tullgarn.jpg", 700, 525, "Tullgarn Palace", "Södermanland", "gold", "stone"),
    ("venue-djurgarden.jpg", 700, 525, "Djurgården Manor", "Stockholm", "sage", "stone"),
    ("venue-sormland.jpg", 700, 525, "Sörmland Barn", "Sörmland", "sage", "stone"),
    ("venue-gamlastan.jpg", 700, 525, "Gamla Stan Rooftop", "Stockholm", "gold", "stone"),
    ("venue-malaren.jpg", 700, 525, "Lake Mälaren Pavilion", "Mälaren", "sage", "stone"),
    ("venue-waterfront-congress.jpg", 700, 525, "Waterfront Congress Centre", "Stockholm", "navy", "stone"),
    ("venue-nalen.jpg", 700, 525, "Nalen", "Stockholm", "navy", "stone"),
    ("venue-grandhotel.jpg", 700, 525, "Grand Hôtel Stockholm", "Stockholm", "navy", "stone"),
    ("journal-01.jpg", 700, 525, "Castle Wedding Tips", "Journal", "gold", "stone"),
    ("journal-02.jpg", 700, 525, "Real Wedding: Skokloster", "Journal", "gold", "stone"),
    ("journal-03.jpg", 700, 525, "Stockholm Florists", "Journal", "sage", "stone"),
]

if __name__ == "__main__":
    for spec in SPECS:
        make_placeholder(*spec)
    print(f"\nDone — {len(SPECS)} placeholder images written to {OUT_DIR}/")
