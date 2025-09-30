

export interface IProduct  {
  name: string;                    
  description?: string;            
  price: number;                  
  image: string;                   
  images: string;             
  rating: number;                  
  stock: number;             
  category: string;             
  subCategory: string;         
  tags: string[];                  
  status: "available" | "out-of-stock" | "discontinued";
  brand?: string;                 
}
