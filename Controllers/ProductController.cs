using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Exam.DAL;
using MongoDB.Bson;

namespace ExamFramework.Controllers
{
    public class ProductController : Controller
    {
        [HttpPost]
        public string AddProduct(string product, string type)
        {
            DbUtility db = new DbUtility();
            string products;
            if (type == "A")
            {
                // db.SaveDocument(student, "students");
                db.SaveDocument(product, "products");
                products = db.GetAllDocumentsWithObjectId("products");
                return products;
            }
            else
            {
                db.ReplaceDocumentByObjectId(product, "products");
                products = db.GetAllDocumentsWithObjectId("products");
                return products;
            }
        }

        [HttpGet]
        public string GetProduct()
        {
            DbUtility db = new DbUtility();
            string products = db.GetAllDocumentsWithObjectId("products");
            //return Json(studentList,JsonRequestBehavior.AllowGet);
            return products;

        }
  

        [HttpPost]
        public string DeleteProduct(string productId)
        {
            DbUtility db = new DbUtility();
            //    db.DeleteDocumentByObjectId("students", ObjectId.Parse(customerId));
            db.DeleteDocumentByObjectId("products", productId);

            string products = db.GetAllDocumentsWithObjectId("products");
            return products;
        }

    }
}
