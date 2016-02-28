using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Exam.DAL;
using MongoDB.Bson;


namespace ExamFramework.Controllers
{
    public class CustomerController : Controller
    {
        //
        // GET: /Customer/

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public string AddCustomer(string customer, string type)
        {
            DbUtility db = new DbUtility();
            string customers;
            if (type == "A")
            {
               // db.SaveDocument(student, "students");
                db.SaveDocument(customer,"customers");
                customers = db.GetAllDocumentsWithObjectId("customers");
                return customers;
            }
            else
            {
                db.ReplaceDocumentByObjectId(customer, "customers");
                customers = db.GetAllDocumentsWithObjectId("customers");
                return customers;
            }
        }

        [HttpGet]
        public string GetCustomer()
        {
            DbUtility db = new DbUtility();
            string customers = db.GetAllDocumentsWithObjectId("customers");
            //return Json(studentList,JsonRequestBehavior.AllowGet);
            return customers;

        }

        [HttpPost]
        public string DeleteCustomer(string customerId)
        {
            DbUtility db = new DbUtility();
        //    db.DeleteDocumentByObjectId("students", ObjectId.Parse(customerId));
            db.DeleteDocumentByObjectId("customers", customerId);

            string customers = db.GetAllDocumentsWithObjectId("customers");
            return customers;
        }

    }
}
