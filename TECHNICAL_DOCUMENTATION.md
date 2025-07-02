# 🔧 Dokumentasi Teknis JamurTiram Pro

Dokumentasi teknis lengkap untuk pengembangan dan maintenance aplikasi JamurTiram Pro.

## 📋 Arsitektur Aplikasi

### Technology Stack
- **Framework**: React Native 0.79.4
- **Runtime**: Expo SDK 53
- **Language**: TypeScript 5.8.3
- **Navigation**: React Navigation v7
- **State Management**: React Hooks (useState, useEffect)
- **Icons**: Expo Vector Icons (Ionicons)
- **Platform Support**: iOS, Android, Web

### Project Structure
```
jamur_tiram_app_rn/
├── App.tsx                     # Main application component
├── app.json                    # Expo configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── src/
│   ├── screens/               # Screen components
│   │   ├── HomeScreen.tsx     # Dashboard screen
│   │   ├── BudidayaScreen.tsx # Cultivation guide screen
│   │   ├── PerawatanScreen.tsx# Maintenance screen
│   │   ├── ProduksiScreen.tsx # Production management screen
│   │   └── ToolsScreen.tsx    # Tools and utilities screen
│   ├── components/            # Reusable UI components
│   ├── data/                  # Static data and types
│   │   ├── budidayaData.ts    # Cultivation data and types
│   │   └── perawatanData.ts   # Maintenance data and types
│   └── utils/                 # Utility functions
├── assets/                    # Static assets
│   ├── design/               # Design mockups and icons
│   └── images/               # Application images
└── dist/                     # Build output directory
```

## 🏗️ Component Architecture

### Navigation Structure
```typescript
// App.tsx - Main navigation setup
<NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Budidaya" component={BudidayaScreen} />
    <Tab.Screen name="Perawatan" component={PerawatanScreen} />
    <Tab.Screen name="Produksi" component={ProduksiScreen} />
    <Tab.Screen name="Tools" component={ToolsScreen} />
  </Tab.Navigator>
</NavigationContainer>
```

### Screen Components

#### HomeScreen.tsx
- **Purpose**: Main dashboard with overview
- **Features**:
  - Weather widget
  - Production summary cards
  - Quick action buttons
  - Recent activity feed
- **State Management**: Local state for UI interactions
- **Data**: Static mock data for demonstration

#### BudidayaScreen.tsx
- **Purpose**: Cultivation guide and progress tracking
- **Features**:
  - 6-step cultivation process
  - Progress bars for each step
  - Additional resources (FAQ, Glossary)
- **Data Source**: `budidayaData.ts`
- **Types**: `CultivationStep` interface

#### PerawatanScreen.tsx
- **Purpose**: Maintenance tasks and environment monitoring
- **Features**:
  - Environment monitoring dashboard
  - Daily maintenance tasks
  - Auto reminder toggle
  - Quick action buttons
- **Data Source**: `perawatanData.ts`
- **Types**: `MaintenanceTask` interface

#### ProduksiScreen.tsx
- **Purpose**: Production management and analytics
- **Features**:
  - Period selector (daily/weekly/monthly)
  - Production summary cards
  - Baglog status tracking
  - Recent harvest records
- **State Management**: Period selection state
- **Data**: Mock production data

#### ToolsScreen.tsx
- **Purpose**: Utilities and calculators
- **Features**:
  - Baglog calculator with real calculations
  - Unit converters
  - Timer and reminder tools
  - Knowledge library
- **State Management**: Calculator inputs and results
- **Logic**: Mathematical calculations for baglog requirements

## 📊 Data Models

### Cultivation Data Types
```typescript
interface CultivationStep {
  id: number;
  title: string;
  description: string;
  details: string;
  materials: string[];
  steps: string[];
  tips: string[];
  duration: string;
  difficulty: 'Mudah' | 'Sedang' | 'Sulit';
  image?: string;
}
```

### Maintenance Data Types
```typescript
interface MaintenanceTask {
  id: number;
  title: string;
  description: string;
  frequency: string;
  importance: 'Tinggi' | 'Sedang' | 'Rendah';
  category: 'Lingkungan' | 'Sanitasi' | 'Monitoring' | 'Panen';
  steps: string[];
  tools: string[];
  tips: string[];
  troubleshooting: {
    problem: string;
    solution: string;
  }[];
}
```

### Environment Standards
```typescript
const environmentStandards = {
  temperature: {
    optimal: { min: 22, max: 28 },
    acceptable: { min: 20, max: 30 },
    unit: '°C',
  },
  humidity: {
    optimal: { min: 80, max: 90 },
    acceptable: { min: 70, max: 95 },
    unit: '%',
  },
  // ...
};
```

## 🎨 Design System

### Color Palette
```typescript
const colors = {
  primary: '#4CAF50',      // Green - main brand color
  secondary: '#2196F3',    // Blue - secondary actions
  accent: '#FF9800',       // Orange - warnings/highlights
  success: '#4CAF50',      // Green - success states
  warning: '#FF9800',      // Orange - warning states
  error: '#F44336',        // Red - error states
  background: '#f5f5f5',   // Light gray - app background
  surface: '#ffffff',      // White - card backgrounds
  text: '#333333',         // Dark gray - primary text
  textSecondary: '#666666', // Medium gray - secondary text
  textLight: '#999999',    // Light gray - tertiary text
  border: '#e0e0e0',       // Light gray - borders
};
```

### Typography Scale
```typescript
const typography = {
  h1: { fontSize: 24, fontWeight: 'bold' },
  h2: { fontSize: 20, fontWeight: 'bold' },
  h3: { fontSize: 18, fontWeight: 'bold' },
  h4: { fontSize: 16, fontWeight: '600' },
  body: { fontSize: 14, fontWeight: 'normal' },
  caption: { fontSize: 12, fontWeight: 'normal' },
  small: { fontSize: 10, fontWeight: 'normal' },
};
```

### Spacing System
```typescript
const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};
```

### Component Styling Patterns
```typescript
// Card component pattern
const cardStyle = {
  backgroundColor: 'white',
  borderRadius: 12,
  padding: 16,
  marginBottom: 12,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3, // Android shadow
};

// Button component pattern
const buttonStyle = {
  backgroundColor: '#4CAF50',
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 16,
  alignItems: 'center',
};
```

## 🔧 Business Logic

### Calculator Functions

#### Baglog Calculator
```typescript
const calculateBaglog = (sawdust: number, riceHusk: number, lime: number) => {
  const totalWeight = sawdust + riceHusk + lime;
  const waterNeeded = totalWeight * 0.6; // 60% of dry weight
  const baglogCount = Math.floor(totalWeight / 1.2); // 1.2 kg per baglog
  
  return {
    totalWeight,
    waterNeeded,
    baglogCount,
    weightPerBaglog: 1.2,
  };
};
```

#### Environment Monitoring Logic
```typescript
const checkEnvironmentStatus = (temperature: number, humidity: number) => {
  const tempStatus = temperature >= 22 && temperature <= 28 ? 'optimal' : 'warning';
  const humidityStatus = humidity >= 80 && humidity <= 90 ? 'optimal' : 'warning';
  
  return {
    temperature: { value: temperature, status: tempStatus },
    humidity: { value: humidity, status: humidityStatus },
  };
};
```

### Progress Tracking
```typescript
const calculateProgress = (stepId: number, totalSteps: number) => {
  // Mock progress calculation based on step completion
  const progressMap = {
    1: 100, // Pemilihan Bibit - completed
    2: 85,  // Persiapan Media - mostly completed
    3: 60,  // Pembuatan Baglog - in progress
    4: 0,   // Sterilisasi - not started
    5: 0,   // Inokulasi - not started
    6: 0,   // Inkubasi - not started
  };
  
  return progressMap[stepId] || 0;
};
```

## 📱 Platform Considerations

### React Native Web Compatibility
- All components use React Native primitives
- Web-specific styling handled automatically by RN Web
- Touch interactions work on both mobile and web
- Navigation adapted for web URLs

### Performance Optimizations
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Proper image sizing and formats
- **Memory Management**: Efficient state management
- **Bundle Size**: Optimized dependencies

### Responsive Design
```typescript
const { width, height } = Dimensions.get('window');

// Responsive grid calculations
const cardWidth = (width - 48) / 2; // 2 columns with margins
const isTablet = width > 768;
const columns = isTablet ? 3 : 2;
```

## 🔄 State Management

### Local State Pattern
```typescript
// Example from ToolsScreen.tsx
const [calculatorType, setCalculatorType] = useState('baglog');
const [sawdust, setSawdust] = useState('');
const [result, setResult] = useState('');

// State update pattern
const handleCalculation = () => {
  const calculatedResult = calculateBaglog(
    parseFloat(sawdust),
    parseFloat(riceHusk),
    parseFloat(lime)
  );
  setResult(formatResult(calculatedResult));
};
```

### Data Flow
1. **Static Data**: Imported from data files
2. **User Input**: Managed via local state
3. **Calculations**: Pure functions for business logic
4. **UI Updates**: React state triggers re-renders

## 🧪 Testing Strategy

### Manual Testing Checklist
- [ ] Navigation between all tabs works
- [ ] Calculator produces correct results
- [ ] UI responsive on different screen sizes
- [ ] Touch interactions work properly
- [ ] No console errors or warnings

### Automated Testing (Future)
```typescript
// Example test structure
describe('BaglogCalculator', () => {
  test('calculates correct baglog requirements', () => {
    const result = calculateBaglog(100, 20, 5);
    expect(result.totalWeight).toBe(125);
    expect(result.waterNeeded).toBe(75);
    expect(result.baglogCount).toBe(104);
  });
});
```

## 🚀 Build and Deployment

### Development Build
```bash
# Start development server
npm run web          # Web development
npm run android      # Android development
npm run ios          # iOS development
```

### Production Build
```bash
# Web build
npx expo export --platform web

# Android APK (requires EAS account)
eas build --platform android --profile preview

# iOS IPA (requires EAS account + Apple Developer)
eas build --platform ios --profile preview
```

### Build Configuration
```json
// app.json
{
  "expo": {
    "name": "JamurTiram Pro",
    "slug": "jamur-tiram-pro",
    "version": "1.0.0",
    "platforms": ["ios", "android", "web"],
    "android": {
      "package": "com.jamurtiram.pro"
    }
  }
}
```

## 🔧 Development Setup

### Prerequisites
```bash
# Required software
Node.js 18+
npm or yarn
Git

# For mobile development
Android Studio (Android)
Xcode (iOS - macOS only)
```

### Installation Steps
```bash
# Clone and setup
git clone <repository>
cd jamur_tiram_app_rn
npm install

# Start development
npm run web
```

### Environment Configuration
```bash
# No environment variables required for basic setup
# Future: API keys, database URLs, etc.
```

## 📈 Performance Metrics

### Bundle Analysis
- **Web Bundle Size**: ~1.24 MB (compressed)
- **Dependencies**: 712 packages
- **Load Time**: < 3 seconds on 3G
- **Memory Usage**: < 100 MB on mobile

### Optimization Opportunities
1. **Code Splitting**: Split by routes
2. **Image Optimization**: WebP format, lazy loading
3. **Bundle Analysis**: Remove unused dependencies
4. **Caching**: Implement service worker for web

## 🐛 Common Issues and Solutions

### Development Issues

#### Metro Bundler Issues
```bash
# Clear cache
npx expo start --clear

# Reset Metro cache
npx react-native start --reset-cache
```

#### TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Update type definitions
npm update @types/react @types/react-native
```

#### Navigation Issues
```typescript
// Ensure proper navigation prop typing
type RootTabParamList = {
  Home: undefined;
  Budidaya: undefined;
  // ...
};

type HomeScreenProps = {
  navigation: NavigationProp<RootTabParamList, 'Home'>;
};
```

### Production Issues

#### Build Failures
- Check Expo SDK compatibility
- Verify all dependencies are compatible
- Ensure proper platform-specific code

#### Performance Issues
- Profile with React DevTools
- Check for memory leaks
- Optimize image sizes and formats

## 🔮 Future Enhancements

### Technical Roadmap

#### Version 1.1
- **Local Database**: SQLite integration
- **Offline Support**: Cache critical data
- **Push Notifications**: Expo Notifications
- **Camera Integration**: Expo Camera

#### Version 1.2
- **State Management**: Redux Toolkit
- **API Integration**: REST API client
- **Authentication**: User accounts
- **Data Sync**: Cloud synchronization

#### Version 2.0
- **IoT Integration**: Sensor data
- **Real-time Updates**: WebSocket connection
- **Advanced Analytics**: Charts and graphs
- **Machine Learning**: Predictive analytics

### Architecture Evolution
```typescript
// Future state management structure
store/
├── slices/
│   ├── authSlice.ts
│   ├── productionSlice.ts
│   └── settingsSlice.ts
├── api/
│   ├── authApi.ts
│   └── productionApi.ts
└── store.ts
```

## 📞 Support and Maintenance

### Code Maintenance
- **Regular Updates**: Keep dependencies updated
- **Security Patches**: Monitor for vulnerabilities
- **Performance Monitoring**: Track app performance
- **User Feedback**: Implement user suggestions

### Documentation Updates
- Keep technical docs in sync with code changes
- Update API documentation when adding features
- Maintain changelog for version tracking

### Deployment Pipeline
```yaml
# Future CI/CD pipeline
name: Build and Deploy
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Build for production
        run: npm run build
```

---

**Dokumentasi ini akan diperbarui seiring dengan pengembangan aplikasi.**

*Last updated: July 2025*

