using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Exam.DAL;
using MongoDB.Bson;

namespace ExamFramework.Controllers
{
    public class StoreController : Controller
    {
        [HttpPost]
        public void AddOrder(string order)
        {
            DbUtility db = new DbUtility();
            //string orders;

            db.SaveDocument(order, "orders");
              //  orders = db.GetAllDocumentsWithObjectId("orders");
              //  return orders;
           
        }

        [HttpGet]
        public string GetOrder()
        {
            DbUtility db = new DbUtility();
            string orders = db.GetAllDocumentsWithObjectId("orders");
            //return Json(studentList,JsonRequestBehavior.AllowGet);
            return orders;

        }

        [HttpPost]
        public string DeleteOrder(string orderId)
        {
            DbUtility db = new DbUtility();
            db.DeleteDocumentByObjectId("orders", orderId);

            string orders = db.GetAllDocumentsWithObjectId("orders");
            return orders;
        }


    }
}
