# 🎨 Secret Vault - NEON CYBERPUNK Color Palette

## 🖤 Background & Base
- **Background**: Pure Black `#000000` (hsl: 0 0% 0%)
- **Cards**: Dark Gray `hsl(0 0% 8%)`
- **Foreground**: Near White `hsl(0 0% 98%)`
- **Borders**: Dark Gray `hsl(0 0% 20%)`

## ✨ NEON Feature Colors

### 🗂️ Categories - NEON CYAN
- **Color**: `#22D3EE` (cyan-400/500)
- **HSL**: `189 94% 60%`
- **Visual**: Bright electric cyan/aqua
- **Usage**: 
  - Category folder icons
  - Left border on category items (2px solid)
  - Main vault heading gradient (from)
  - New Category button
  - Scrollbar accent

### ⚡ Services - NEON PURPLE  
- **Color**: `#A855F7` (purple-400/500)
- **HSL**: `270 80% 65%`
- **Visual**: Vibrant electric purple/violet
- **Usage**:
  - Service lightning bolt icons
  - Left border on service items (2px solid)
  - Edit buttons on accounts
  - Heading gradient (to)
  - Mid-point in account header gradient

### 🔐 Accounts - NEON TEAL
- **Color**: `#2DD4BF` (teal-400)
- **HSL**: `165 75% 65%`
- **Visual**: Bright neon teal/turquoise
- **Usage**:
  - Account indicator dots
  - Secret field borders when revealed (with glow!)
  - Account card left borders (4px solid)
  - Account header gradient (from)
  - Border glow effects on revealed secrets

## 🌈 Gradient Combinations

### Main Header Gradient
```css
background: linear-gradient(to right, #22D3EE, #A855F7);
/* Cyan → Purple */
```

### Account Details Header Gradient
```css
background: linear-gradient(to right, #2DD4BF, #A855F7, #22D3EE);
/* Teal → Purple → Cyan */
```

### Sidebar Header Background
```css
background: linear-gradient(to bottom-right, 
  rgba(34, 211, 238, 0.1),  /* cyan */
  rgba(168, 85, 247, 0.1),  /* purple */
  rgba(168, 85, 247, 0.1)   /* purple */
);
```

## 💫 Neon Glow Effects

### Text Shadows (Neon Glow)
```css
/* Cyan Glow */
text-shadow: 
  0 0 10px rgba(34, 211, 238, 0.5),
  0 0 20px rgba(34, 211, 238, 0.3),
  0 0 30px rgba(34, 211, 238, 0.2);

/* Purple Glow */
text-shadow:
  0 0 10px rgba(168, 85, 247, 0.5),
  0 0 20px rgba(168, 85, 247, 0.3),
  0 0 30px rgba(168, 85, 247, 0.2);

/* Teal Glow */
text-shadow:
  0 0 10px rgba(45, 212, 191, 0.5),
  0 0 20px rgba(45, 212, 191, 0.3),
  0 0 30px rgba(45, 212, 191, 0.2);
```

### Border Glow (Box Shadows)
```css
/* Applied to revealed secrets */
box-shadow: 
  0 0 5px rgba(45, 212, 191, 0.3),
  0 0 10px rgba(45, 212, 191, 0.2);
```

## 🎯 Semantic UI Colors

- **Primary**: Neon Cyan `hsl(189 94% 60%)` - Main CTA buttons
- **Secondary**: Neon Purple `hsl(270 80% 65%)` - Secondary actions
- **Destructive**: Bright Red `hsl(0 84% 60%)` - Delete/danger actions
- **Accent**: Dark Teal `hsl(180 50% 25%)` - Hover states
- **Muted**: Gray `hsl(0 0% 60%)` - Disabled text

## 📊 Chart Colors (Data Viz)
1. **Cyan**: `hsl(189 94% 60%)` - #22D3EE
2. **Pink**: `hsl(330 80% 70%)` - Bright magenta
3. **Yellow-Green**: `hsl(85 70% 65%)` - Electric lime
4. **Purple**: `hsl(270 80% 65%)` - #A855F7
5. **Teal**: `hsl(165 75% 65%)` - #2DD4BF

## 🎨 Visual Hierarchy

1. **Main Heading**: Cyan→Purple gradient + drop shadow glow
2. **Categories**: Cyan border (left 2px) + cyan icon
3. **Services**: Purple border (left 2px) + purple icon
4. **Accounts**: Teal dots + teal card borders
5. **Revealed Secrets**: Teal border + teal glow + teal background tint

## 🌃 Cyberpunk Theme Philosophy

- **Pure black (#000000)** - Maximum contrast, OLED-friendly
- **Neon colors** - Electric cyan, purple, teal for that cyberpunk aesthetic
- **Glowing effects** - Text shadows and box shadows create depth
- **Color-coded navigation** - Instant visual recognition
- **Gradient text** - Futuristic premium look
- **Minimal gray** - Replaced with vibrant accents
- **High saturation** - 75-95% saturation for pure neon effect

## 🎭 Color Psychology

- **Cyan**: Technology, digital, trust
- **Purple**: Premium, creative, mysterious  
- **Teal**: Security, balance, clarity
- **Black**: Professional, focused, modern
- **Combined**: Futuristic cyberpunk aesthetic

