import { role } from './db/schema.js';

async function seed() {
    try {
      
      await db.insert(role).values([
        { name: 'Admin' },
        { name: 'Client' },
        { name: 'Teacher' },
      ]);
  
      console.log('Seeding completed successfully!');
    } catch (error) {
      console.error('Error seeding data:', error);
    } finally {
      await queryClient.end();
    }
  }
  
  seed();