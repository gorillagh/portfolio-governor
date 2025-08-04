// Mock Firebase for testing

export const mockFirestore = {
  collection: jest.fn(() => ({
    doc: jest.fn(() => ({
      get: jest.fn(() => Promise.resolve({ 
        exists: true, 
        data: () => ({ id: 'test', createdAt: new Date() })
      })),
      set: jest.fn(() => Promise.resolve()),
      update: jest.fn(() => Promise.resolve()),
      delete: jest.fn(() => Promise.resolve()),
    })),
    add: jest.fn(() => Promise.resolve({ 
      id: 'test-doc-id' 
    })),
    where: jest.fn(() => ({
      get: jest.fn(() => Promise.resolve({
        docs: [
          { 
            id: 'test-1', 
            data: () => ({ name: 'Test Document 1' })
          }
        ]
      }))
    })),
    orderBy: jest.fn(() => ({
      limit: jest.fn(() => ({
        get: jest.fn(() => Promise.resolve({
          docs: []
        }))
      }))
    })),
    get: jest.fn(() => Promise.resolve({
      docs: []
    }))
  }))
}

export const mockStorage = {
  ref: jest.fn(() => ({
    child: jest.fn(() => ({
      put: jest.fn(() => Promise.resolve({
        ref: {
          getDownloadURL: jest.fn(() => Promise.resolve('https://test-url.com/image.jpg'))
        }
      }))
    }))
  }))
}

export const mockAnalytics = {
  logEvent: jest.fn(),
  setUserId: jest.fn(),
  setUserProperties: jest.fn(),
}

// Firebase services
export const db = mockFirestore
export const storage = mockStorage  
export const analytics = mockAnalytics
export const app = {}

export const validateFirebaseConfig = jest.fn(() => true)