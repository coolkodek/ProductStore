using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Exam.DAL;
using MongoDB.Bson;

namespace ExamFramework.Controllers
{
    public class BlogController : Controller
    {
        [HttpPost]
        public string AddPost(string post, string type)
        {
            DbUtility db = new DbUtility();
            string posts;

                 if (type == "A")
                {
                    // db.SaveDocument(student, "students");
                    db.SaveDocument(post, "blogPosts");
                    posts = db.GetAllDocumentsWithObjectId("blogPosts");
                    return posts;
                }
                else
                {
                    db.ReplaceDocumentByObjectId(post, "blogPosts");
                    posts = db.GetAllDocumentsWithObjectId("blogPosts");
                    return posts;
                }
           
        }

        [HttpGet]
        public string GetPosts()
        {
            DbUtility db = new DbUtility();
            string posts = db.GetAllDocumentsWithObjectId("blogPosts");
            //return Json(studentList,JsonRequestBehavior.AllowGet);
            return posts;

        }


        [HttpPost]
        public string DeletePost(string postId)
        {
            DbUtility db = new DbUtility();
            //    db.DeleteDocumentByObjectId("students", ObjectId.Parse(customerId));
            db.DeleteDocumentByObjectId("blogPosts", postId);

            string posts = db.GetAllDocumentsWithObjectId("blogPosts");
            return posts;
        }

    }
}
