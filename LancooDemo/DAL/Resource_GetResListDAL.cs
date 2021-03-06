﻿using LancooDemo.Common;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace LancooDemo.DAL
{
    public class Resource_GetResListDAL : IDA1
    {
        public Resource_GetResListDAL(SqlHelper1 db) : base(db)
        {
        }

        public DataTable GetResListByTime(int pageIndex)
        {

            List<IDataParameter> parameters = Param()
               //.Add("@courseCode", "")
               //.Add("@versionCode", "")
               //.Add("@type", "")
               .Add("@pageIndex", pageIndex)
                .Add("@pageSize", 5000)
                //.Add("@totalCount", )
                //.Add("@filter", "")
                .Build();
            string sqlStr = "P_Lgdb_Resource_GetResList";
            DataTable dt = new DataTable();
            dt = db.QueryCommand(sqlStr, CommandType.StoredProcedure, parameters);

            return dt;
        }

    }
}