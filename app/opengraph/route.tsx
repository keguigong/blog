import { ImageResponse } from "next/og"
import { type NextRequest } from "next/server"
import { description as desc } from "@/package.json"
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const title = searchParams.get("title") || "keguigong.org"
  const description = searchParams.get("description") || desc

  const panpeaBold = fetch(new URL("./DinkieBitmap-7pxDemo.ttf", import.meta.url)).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 50,
          color: "black",
          background:
            "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIHZpZXdCb3g9IjAgMCAxMjAwIDYzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE0NV82KSI+CjxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjYzMCIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE0NV82KSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMjU4LjMxM0MxMjQuMTIxIDE0MC43NjkgMzA5LjUwNiA0OS4xNzcxIDUyOC45MzQgMEwxMjAwIDBWNjMwSDBMMCAyNTguMzEzWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzE0NV82KSIvPgo8cGF0aCBkPSJNNDYwIDEyNUg0NzVWMTYyLjVINDY3LjVWMTU1SDQ2MFYxNDcuNUg0NjcuNVYxMzIuNUg0NjBWMTI1Wk00NTIuNSAxMzIuNUg0NjBWMTQ3LjVINDUyLjVWMTMyLjVaTTQ1Mi41IDE3MFYxNjIuNUg0NjcuNVYxNzBINDUyLjVaIiBmaWxsPSIjNTM1MzUzIi8+CjxwYXRoIGQ9Ik00MzcuNSAxMzIuNVYxMjVINDQ1VjEzMi41SDQzNy41Wk00MzAgMTMyLjVINDM3LjVWMTU1SDQzMFYxMzIuNVoiIGZpbGw9IiM1MzUzNTMiLz4KPHBhdGggZD0iTTQwNy41IDEyNUg0MTVWMTMyLjVINDA3LjVWMTI1Wk00MDAgMTMyLjVINDA3LjVWMTQ3LjVINDAwVjEzMi41Wk00MTUgMTMyLjVINDIyLjVWMTQ3LjVINDE1VjEzMi41Wk00MTUgMTU1SDQwNy41VjE0Ny41SDQxNVYxNTVaIiBmaWxsPSIjNTM1MzUzIi8+CjxwYXRoIGQ9Ik0zODUgMTU1VjE0Ny41SDM5Mi41VjE1NUgzODVaIiBmaWxsPSIjNTM1MzUzIi8+CjxwYXRoIGQ9Ik0zNjIuNSAxMjVIMzc3LjVWMTYyLjVIMzcwVjE1NUgzNjIuNVYxNDcuNUgzNzBWMTMyLjVIMzYyLjVWMTI1Wk0zNTUgMTMyLjVIMzYyLjVWMTQ3LjVIMzU1VjEzMi41Wk0zNTUgMTcwVjE2Mi41SDM3MFYxNzBIMzU1WiIgZmlsbD0iIzUzNTM1MyIvPgo8cGF0aCBkPSJNMzI1IDEyNUgzNDBWMTMyLjVIMzMyLjVWMTU1SDMyNVYxMjVaTTM0MCAxMzIuNUgzNDcuNVYxNTVIMzQwVjEzMi41WiIgZmlsbD0iIzUzNTM1MyIvPgo8cGF0aCBkPSJNMzAyLjUgMTI1SDMxMFYxMzIuNUgzMDIuNVYxMjVaTTI5NSAxMzIuNUgzMDIuNVYxNDcuNUgyOTVWMTMyLjVaTTMxMCAxMzIuNUgzMTcuNVYxNDcuNUgzMTBWMTMyLjVaTTMxMCAxNTVIMzAyLjVWMTQ3LjVIMzEwVjE1NVoiIGZpbGw9IiM1MzUzNTMiLz4KPHBhdGggZD0iTTI3Mi41IDEyNUgyODcuNVYxNjIuNUgyODBWMTU1SDI3Mi41VjE0Ny41SDI4MFYxMzIuNUgyNzIuNVYxMjVaTTI2NSAxMzIuNUgyNzIuNVYxNDcuNUgyNjVWMTMyLjVaTTI2NSAxNzBWMTYyLjVIMjgwVjE3MEgyNjVaIiBmaWxsPSIjNTM1MzUzIi8+CjxwYXRoIGQ9Ik0yNTAgMTE3LjVWMTEwSDI1Ny41VjExNy41SDI1MFpNMjUwIDEyNUgyNTcuNVYxNTVIMjUwVjEyNVoiIGZpbGw9IiM1MzUzNTMiLz4KPHBhdGggZD0iTTIyNy41IDEyNVYxNDcuNUgyMjBWMTI1SDIyNy41Wk0yMzUgMTI1SDI0Mi41VjE1NUgyMjcuNVYxNDcuNUgyMzVWMTI1WiIgZmlsbD0iIzUzNTM1MyIvPgo8cGF0aCBkPSJNMTk3LjUgMTI1SDIxMi41VjE2Mi41SDIwNVYxNTVIMTk3LjVWMTQ3LjVIMjA1VjEzMi41SDE5Ny41VjEyNVpNMTkwIDEzMi41SDE5Ny41VjE0Ny41SDE5MFYxMzIuNVpNMTkwIDE3MFYxNjIuNUgyMDVWMTcwSDE5MFoiIGZpbGw9IiM1MzUzNTMiLz4KPHBhdGggZD0iTTE2Ny41IDEyNUgxODIuNVYxNDBIMTc1VjEzMi41SDE2Ny41VjEyNVpNMTYwIDEzMi41SDE2Ny41VjE0MEgxNzVWMTQ3LjVIMTgyLjVWMTU1SDE2Ny41VjE0Ny41SDE2MFYxMzIuNVoiIGZpbGw9IiM1MzUzNTMiLz4KPHBhdGggZD0iTTEzNy41IDEzMi41SDE0NVYxNDBIMTM3LjVWMTU1SDEzMFYxMTBIMTM3LjVWMTMyLjVaTTE0NSAxMjVIMTUyLjVWMTMyLjVIMTQ1VjEyNVpNMTUyLjUgMTU1SDE0NVYxNDBIMTUyLjVWMTU1WiIgZmlsbD0iIzUzNTM1MyIvPgo8cGF0aCBkPSJNMTE1NyA1MjBWNTMwSDExNDdWNTcwSDExMzdWNTMwSDExMjdWNTIwSDExNTdaIiBmaWxsPSIjNTM1MzUzIi8+CjxwYXRoIGQ9Ik0xMTE3IDUyMFY1MzBIMTA5N1Y1MjBIMTExN1pNMTA4NyA1NDBWNTMwSDEwOTdWNTQwSDEwODdaTTEwOTcgNTQwSDExMTdWNTUwSDEwOTdWNTQwWk0xMTE3IDU2MFY1NTBIMTEyN1Y1NjBIMTExN1pNMTA4NyA1NjBIMTExN1Y1NzBIMTA4N1Y1NjBaIiBmaWxsPSIjNTM1MzUzIi8+CjxwYXRoIGQ9Ik0xMDQ3IDUyMFY1MzBIMTA1N1Y1NDBIMTA0N1Y1NzBIMTAzN1Y1MjBIMTA0N1pNMTA2NyA1MjBIMTA3N1Y1NzBIMTA2N1Y1NTBIMTA1N1Y1NDBIMTA2N1Y1MjBaIiBmaWxsPSIjNTM1MzUzIi8+CjxwYXRoIGQ9Ik0xMDE3IDUyMFY1MzBIOTk3VjUyMEgxMDE3Wk05OTcgNTMwVjU2MEg5ODdWNTMwSDk5N1pNMTAxNyA1MzBIMTAyN1Y1NjBIMTAxN1Y1MzBaTTk5NyA1NzBWNTYwSDEwMTdWNTcwSDk5N1oiIGZpbGw9IiM1MzUzNTMiLz4KPHBhdGggZD0iTTk0NyA1MjBIOTY3VjUzMEg5NDdWNTIwWk05MzcgNTMwSDk0N1Y1NjBIOTM3VjUzMFpNOTc3IDUzMFY1NDBIOTY3VjUzMEg5NzdaTTk2NyA1NTBIOTc3VjU2MEg5NjdWNTUwWk05NjcgNTcwSDk0N1Y1NjBIOTY3VjU3MFoiIGZpbGw9IiM1MzUzNTMiLz4KPHJlY3QgeD0iOTY3IiB5PSI1MTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iOTY3IiB5PSI1NDAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iOTQ3IiB5PSI1MzAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIzMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iOTU3IiB5PSI1MzAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIzMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iOTc3IiB5PSI1NDAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIzMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iOTY3IiB5PSI1NjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTA0NyIgeT0iNTUwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjEwNTciIHk9IjU1MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxMDc3IiB5PSI1NTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTEyNyIgeT0iNTUwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjExNDciIHk9IjU1MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI5MzciIHk9IjU2MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI5MjciIHk9IjU1MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI5MjciIHk9IjUzMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI5MzciIHk9IjUxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI5NDciIHk9IjUyMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgOTQ3IDUyMCkiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9Ijk5NyIgeT0iNTIwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0icm90YXRlKC05MCA5OTcgNTIwKSIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTA2MiIgeT0iNTIwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0icm90YXRlKC05MCAxMDYyIDUyMCkiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjEwNjIiIHk9IjU4MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMTA2MiA1ODApIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxMDI3IiB5PSI1ODAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDEwMjcgNTgwKSIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTA4NyIgeT0iNTgwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0icm90YXRlKC05MCAxMDg3IDU4MCkiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjExMzIiIHk9IjU4MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMTEzMiA1ODApIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxMTI3IiB5PSI1MjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDExMjcgNTIwKSIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTEzNyIgeT0iNTIwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0icm90YXRlKC05MCAxMTM3IDUyMCkiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjEwOTciIHk9IjUyMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMTA5NyA1MjApIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxMDMyIiB5PSI1MjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDEwMzIgNTIwKSIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTA5NyIgeT0iNTYwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0icm90YXRlKC05MCAxMDk3IDU2MCkiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjEwOTciIHk9IjUzOCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMTA5NyA1MzgpIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxMTA3IiB5PSI1ODAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDExMDcgNTgwKSIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iOTQ3IiB5PSI1ODAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDk0NyA1ODApIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI5OTciIHk9IjU4MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgOTk3IDU4MCkiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjkyNyIgeT0iNTIwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9Ijk5NyIgeT0iNTMwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjEwMDciIHk9IjU0MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxMDA3IiB5PSI1MzAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iOTk3IiB5PSI1NDAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iOTg3IiB5PSI1NjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTAxNyIgeT0iNTYwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjEwMjciIHk9IjU1MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxMDI3IiB5PSI1MzAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTAyNyIgeT0iNTEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjEwMTciIHk9IjUxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxMDU3IiB5PSI1MjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTA1NyIgeT0iNTEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjEwNDciIHk9IjUxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxMDQ3IiB5PSI1MzgiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTA3NyIgeT0iNTMwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjEwNzciIHk9IjUxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxMTE3IiB5PSI1MzAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTEyNyIgeT0iNTMwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjExNDciIHk9IjUzMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxMTU3IiB5PSI1MjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTE1NyIgeT0iNTEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjExMTciIHk9IjUxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxMDg3IiB5PSI1NDAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTA4NyIgeT0iNTEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9Ijk4NyIgeT0iNTEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjEwNDciIHk9IjU2MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxMDU3IiB5PSI1NjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTA3NyIgeT0iNTYwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjExMTciIHk9IjU2MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIxMTI3IiB5PSI1NjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTE0NyIgeT0iNTYwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9Ijk3NyIgeT0iNTIwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xNDVfNiIgeDE9IjI0MS41IiB5MT0iMTI3LjUiIHgyPSIxMTIyLjUiIHkyPSIzMTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0VERjJGNyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzE0NV82IiB4MT0iODk5LjUiIHkxPSItNDAiIHgyPSI4OTkuNSIgeTI9IjEyNTAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRURGMkY3Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTQ1XzYiPgo8cmVjdCB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==)",
          width: "100%",
          height: "100%",
          padding: "50px 130px",
          textAlign: "left",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        {title || "👋 Hello"}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Panpea",
          data: await panpeaBold,
          style: "normal",
          weight: 400
        }
      ]
    }
  )
}
