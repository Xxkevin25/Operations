// #include <iostream>
// using namespace std;

// class Dog
// {
// public:
//    Dog();
//    void Read();
//    void Print();
//    ~Dog();

// private:
//    int age;
//    int weight;
// };
// Dog::Dog()
// {
//    age = 0;
//    weight = 0;
// }
// void Dog::Read()
// {
//    cin >> age;
//    cin >> weight;
// }
// void Dog::Print()
// {
//    cout << "Dog's age: " << age << endl;
//    cout << "Dog's weight: " << weight << endl;
// }
// Dog::~Dog()
// { // Covered in section on Destructors.
//    cout << "Dog with age " << age << " and weight " << weight << " is deallocated." << endl;
// }

// int main()
// {
//    Dog *myDogs = nullptr;
//    int count;
//    int i;

//    /* Your code goes here */
//    cin >> count;

//    myDogs = new Dog[count];

//    for (i = 0; i < count; i++)
//    {
//       myDogs[i].Read();
//       myDogs[i].Print();
//    }

//    delete[] myDogs;

//    return 0;
// }

#include <iostream>
#include <fstream>
#include <vector>

// Define your struct for the bitmap header
struct BitmapHeader
{
   // ...
};

// Define your struct for the bitmap data
struct BitmapData
{
   // ...
};

// Function to read the bitmap file
void readBitmapFile(const std::string &filename, BitmapHeader &header, BitmapData &data)
{
   // ...
}

// Function to write the bitmap file
void writeBitmapFile(const std::string &filename, const BitmapHeader &header, const BitmapData &data)
{
   // ...
}

// Function to rotate the image 90 degrees clockwise
void rotate90(BitmapData &data)
{
   // ...
}

// Function to rotate the image 180 degrees
void rotate180(BitmapData &data)
{
   // ...
}

// Function to rotate the image 270 degrees clockwise
void rotate270(BitmapData &data)
{
   // ...
}

// Function to flip the image horizontally
void flipHorizontal(BitmapData &data)
{
   // ...
}

// Function to flip the image vertically
void flipVertical(BitmapData &data)
{
   // ...
}

// Function to reverse the order of all the pixels in the picture
void reversePixels(BitmapData &data)
{
   // ...
}

// Function to invert the colors
void invertColors(BitmapData &data)
{
   // ...
}

// Function to add salt and pepper
void addSaltAndPepper(BitmapData &data)
{
   // ...
}

// Function to double the size of the picture
void doubleSize(BitmapData &data)
{
   // ...
}

int main()
{
   std::string filename;
   std::cout << "Enter the bitmap file name: ";
   std::cin >> filename;

   BitmapHeader header;
   BitmapData data;

   readBitmapFile(filename, header, data);

   int option = 0;
   do
   {
      std::cout << "1. Display File Specifications\n"
                << "2. Rotate Image 90 deg (clockwise)\n"
                << "3. Rotate Image 180 deg\n"
                << "4. Rotate Image 270 deg (clockwise)\n"
                << "5. Flip image horizontal\n"
                << "6. Flip image vertical\n"
                << "7. Reverse order of all of the pixels in the picture\n"
                << "8. Invert Colors\n"
                << "9. Add salt and pepper\n"
                << "10. Double the size of the Picture\n"
                << "11. Exit the Program\n"
                << "Enter your option: ";
      std::cin >> option;

      switch (option)
      {
      case 1:
         // Display file specifications
         break;
      case 2:
         rotate90(data);
         break;
      case 3:
         rotate180(data);
         break;
      case 4:
         rotate270(data);
         break;
      case 5:
         flipHorizontal(data);
         break;
      case 6:
         flipVertical(data);
         break;
      case 7:
         reversePixels(data);
         break;
      case 8:
         invertColors(data);
         break;
      case 9:
         addSaltAndPepper(data);
         break;
      case 10:
         doubleSize(data);
         break;
      case 11:
         std::cout << "Exiting the program.\n";
         break;
      default:
         std::cout << "Invalid option. Please try again.\n";
         break;
      }

      if (option >= 2 && option <= 10)
      {
         writeBitmapFile(filename, header, data);
      }
   } while (option != 11);

   return 0;
}
